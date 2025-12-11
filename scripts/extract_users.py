#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
MySQL backup dosyasından users verilerini çıkar ve Supabase formatına çevir
"""

import re
import sys

def extract_users_from_sql(sql_file_path):
    with open(sql_file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # INSERT INTO `users` satırlarını bul
    pattern = r"INSERT INTO `users`[^;]+;"
    matches = re.findall(pattern, content)
    
    supabase_inserts = []
    for match in matches:
        # Backtick'leri kaldır
        cleaned = match.replace('`', '')
        
        # VALUES kısmını bul
        if 'VALUES' in cleaned:
            # INSERT kısmı
            insert_part = "INSERT INTO users (tc, adsoyad, mail, telefon, sifre, diploma, aktif, klinikgiris, baslama, bitis)"
            
            # VALUES kısmı - id'yi çıkar
            values_match = re.search(r'VALUES\s*\(([^)]+)\)', cleaned)
            if values_match:
                values_str = values_match.group(1)
                # İlk değer (id) hariç diğerlerini al
                values_list = [v.strip() for v in values_str.split(',')]
                # id'yi atla (ilk eleman)
                values_list = values_list[1:]
                # NULL değerlerini düzelt
                cleaned_values = []
                for v in values_list:
                    v = v.strip()
                    if v.upper() == 'NULL':
                        cleaned_values.append('NULL')
                    else:
                        cleaned_values.append(v)
                
                values_part = '(' + ', '.join(cleaned_values) + ')'
                
                # ON CONFLICT ekle
                full_insert = f"{insert_part} VALUES {values_part} ON CONFLICT (tc) DO UPDATE SET adsoyad = EXCLUDED.adsoyad, mail = EXCLUDED.mail, telefon = EXCLUDED.telefon, sifre = EXCLUDED.sifre, diploma = EXCLUDED.diploma, aktif = EXCLUDED.aktif, klinikgiris = EXCLUDED.klinikgiris, baslama = EXCLUDED.baslama, bitis = EXCLUDED.bitis;"
                supabase_inserts.append(full_insert)
    
    return supabase_inserts

if __name__ == '__main__':
    sql_file = '../../betulsahin_backup_20251120_080815.sql'
    inserts = extract_users_from_sql(sql_file)
    
    # Tüm INSERT'leri yazdır
    for insert in inserts:
        print(insert)
