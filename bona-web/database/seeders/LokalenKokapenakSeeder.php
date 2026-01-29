<?php

namespace Database\Seeders;

use App\Models\Lokala;
use Illuminate\Database\Seeder;
use App\Models\Langile;

class LokalenKokapenakSeeder extends Seeder
{
    public function run(): void
    {
        $langile = Langile::first(); // cualquiera

        $lokalak = [
            'Bona Center - Nafarroa Hiribidea, 2, 20013 Donostia / San Sebastián, Gipuzkoa',
            'Bona Tolosa - San Frantzisko Pasealekua, 8, 20400 Tolosa, Gipuzkoa',
            'Bona Mutriku - Erdiko Kalea, 23, 20830 Mutriku, Gipuzkoa',
            'Bona Vitoria-Gazteiz - Francia Kalea, 24, 01002 Vitoria-Gasteiz, Araba',
            'Bona Bilbao - Ercilla Kalea, 22, Abando, 48009 Bilbao, Bizkaia',
            'Bona Estella - Pl. los Fueros, 24, 31200 Estella, Navarra',
            'Bona Pamplona - Av. del Ejército, 30, 31002 Pamplona, Navarra',
        ];

        foreach ($lokalak as $kokapena) {
            Lokala::create([
                'idLangile' => $langile->idLangile,
                'kokapena'  => $kokapena,
            ]);
        }
    }
}
