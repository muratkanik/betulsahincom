import { supabase } from './supabase'

// Timeout ve retry için yardımcı fonksiyonlar

const DEFAULT_TIMEOUT = 120000 // 120 saniye (milisaniye)
const MAX_RETRIES = 3
const RETRY_DELAY = 1000 // 1 saniye

// Timeout ile Promise wrapper
function withTimeout<T>(
  promise: Promise<T>,
  timeoutMs: number = DEFAULT_TIMEOUT
): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error('İşlem zaman aşımına uğradı (120 saniye)')), timeoutMs)
    )
  ])
}

// Retry mekanizması
async function withRetry<T>(
  fn: () => Promise<T>,
  maxRetries: number = MAX_RETRIES,
  delay: number = RETRY_DELAY
): Promise<T> {
  let lastError: Error | null = null

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await withTimeout(fn(), DEFAULT_TIMEOUT)
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error))
      
      // Son denemede hata fırlat
      if (attempt === maxRetries) {
        throw lastError
      }

      // Retry delay
      await new Promise(resolve => setTimeout(resolve, delay * attempt))
    }
  }

  throw lastError || new Error('Bilinmeyen hata')
}

// Supabase query wrapper with timeout and retry
export async function supabaseQuery<T>(
  queryFn: () => Promise<{ data: T | null; error: any }>,
  timeoutMs: number = DEFAULT_TIMEOUT
): Promise<{ data: T | null; error: any }> {
  try {
    return await withRetry(async () => {
      return await withTimeout(queryFn(), timeoutMs)
    })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Bilinmeyen hata'
    console.error('Supabase query error:', errorMessage)
    return {
      data: null,
      error: {
        message: errorMessage.includes('zaman aşımı') 
          ? 'Veritabanı işlemi zaman aşımına uğradı. Lütfen tekrar deneyin.'
          : `Veritabanı hatası: ${errorMessage}`
      }
    }
  }
}

// Supabase insert wrapper
export async function supabaseInsert<T>(
  table: string,
  values: any,
  timeoutMs: number = DEFAULT_TIMEOUT
): Promise<{ data: T | null; error: any }> {
  return supabaseQuery(
    async () => await supabase.from(table).insert(Array.isArray(values) ? values : [values]).select().single(),
    timeoutMs
  )
}

// Supabase update wrapper
export async function supabaseUpdate<T>(
  table: string,
  values: any,
  filter: { column: string; value: any },
  timeoutMs: number = DEFAULT_TIMEOUT
): Promise<{ data: T | null; error: any }> {
  return supabaseQuery(
    async () => await supabase.from(table).update(values).eq(filter.column, filter.value).select().single(),
    timeoutMs
  )
}

// Supabase select wrapper
export async function supabaseSelect<T>(
  table: string,
  filter?: { column: string; value: any },
  timeoutMs: number = DEFAULT_TIMEOUT
): Promise<{ data: T[] | null; error: any }> {
  return supabaseQuery(
    async () => {
      let query = supabase.from(table).select('*')
      if (filter) {
        query = query.eq(filter.column, filter.value)
      }
      return await query
    },
    timeoutMs
  )
}

// Supabase select single wrapper
export async function supabaseSelectSingle<T>(
  table: string,
  filter: { column: string; value: any },
  timeoutMs: number = DEFAULT_TIMEOUT
): Promise<{ data: T | null; error: any }> {
  return supabaseQuery(
    async () => await supabase.from(table).select('*').eq(filter.column, filter.value).single(),
    timeoutMs
  )
}

// Supabase delete wrapper
export async function supabaseDelete(
  table: string,
  filter: { column: string; value: any },
  timeoutMs: number = DEFAULT_TIMEOUT
): Promise<{ error: any }> {
  try {
    return await withRetry<{ error: any }>(async () => {
      const result = await withTimeout(
        (async () => await supabase.from(table).delete().eq(filter.column, filter.value))(),
        timeoutMs
      )
      return result as { error: any }
    })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Bilinmeyen hata'
    console.error('Supabase delete error:', errorMessage)
    return {
      error: {
        message: errorMessage.includes('zaman aşımı')
          ? 'Silme işlemi zaman aşımına uğradı. Lütfen tekrar deneyin.'
          : `Silme hatası: ${errorMessage}`
      }
    }
  }
}
