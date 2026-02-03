<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EskaerakSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('eskaerak')->truncate();

        $eskaerak = [
            // ✅ ZAIN (arriba - para aceptar)
            [
                'id_eskaera' => 1,
                'eskaeraData' => '2026-02-03 12:00:00',
                'eskaerarenEgoera' => 'zain',
                'ordainketaMota' => 'online',
                'entregaHelbidea' => 'Gasteiz kalea 123, 01001 Vitoria-Gasteiz',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id_eskaera' => 2,
                'eskaeraData' => '2026-02-03 12:30:00',
                'eskaerarenEgoera' => 'zain',
                'ordainketaMota' => 'denda', 
                'entregaHelbidea' => 'Pick-up dendan',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // ✅ BIDALKETAN (abajo - ya aceptado)
            [
                'id_eskaera' => 3,
                'eskaeraData' => '2026-02-03 11:30:00',
                'eskaerarenEgoera' => 'bidalketan',
                'ordainketaMota' => 'online',
                'entregaHelbidea' => 'Araba kalea 45, Gasteiz',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('eskaerak')->insert($eskaerak);
        echo "✅ 2 ZAIN + 1 BIDALKETAN listos para probar\n";
    }
}
