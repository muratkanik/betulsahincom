import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Build zamanında hata vermemek için boş string kontrolü
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createClient('https://placeholder.supabase.co', 'placeholder-key')

// Database types
export interface User {
  id: number
  tc: string
  adsoyad: string
  sifre: string
  aktif: number
  klinikgiris?: string
  baslama?: string
  bitis?: string
}

export interface FiyatIstek {
  id?: number
  ad: string
  sehir: string
  gsm: string
  islem: string
  created_at?: string
}

export interface Iletisim {
  id?: number
  ad: string
  email: string
  telefon?: string
  mesaj: string
  created_at?: string
}
