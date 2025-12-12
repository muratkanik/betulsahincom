#!/bin/bash

# GitHub push işlemi için timeout ve retry mekanizması
# Kullanım: ./git-push-with-timeout.sh [commit_message]

TIMEOUT=120  # 120 saniye
MAX_RETRIES=3
RETRY_DELAY=2

COMMIT_MSG="${1:-Auto commit}"

cd "$(dirname "$0")/.." || exit 1

push_with_timeout() {
  local attempt=1
  
  while [ $attempt -le $MAX_RETRIES ]; do
    echo "Git push denemesi $attempt/$MAX_RETRIES..."
    
    # Timeout ile git push
    if timeout $TIMEOUT git add -A && \
       timeout $TIMEOUT git commit -m "$COMMIT_MSG" && \
       timeout $TIMEOUT git push; then
      echo "✓ Git push başarılı!"
      return 0
    else
      local exit_code=$?
      if [ $exit_code -eq 124 ]; then
        echo "⚠ Git push zaman aşımına uğradı (120 saniye)"
      else
        echo "⚠ Git push hatası (exit code: $exit_code)"
      fi
      
      if [ $attempt -lt $MAX_RETRIES ]; then
        echo "⏳ $RETRY_DELAY saniye bekleniyor..."
        sleep $RETRY_DELAY
      fi
    fi
    
    attempt=$((attempt + 1))
  done
  
  echo "✗ Git push başarısız oldu ($MAX_RETRIES deneme sonrası)"
  return 1
}

push_with_timeout
