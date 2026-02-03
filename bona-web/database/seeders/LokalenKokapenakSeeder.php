<?php

namespace Database\Seeders;

use App\Models\Lokala;
use Illuminate\Database\Seeder;
use App\Models\Langile;

class LokalenKokapenakSeeder extends Seeder
{
    public function run(): void
    {
        // Intentamos obtener el primer trabajador
        $langile = Langile::first();

        // SI NO EXISTE NINGUNO, lo creamos para que no explote la línea 32
       if (!$langile) {
            // Esto creará un registro con los valores por defecto de la DB
            // Si tienes campos obligatorios, pon los nombres correctos aquí
            $langile = new Langile();
            $langile->save(); 
        }

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
                'idLangile' => $langile->idLangile, // Ahora ya no será null
                'kokapena'  => $kokapena,
            ]);
        }
    }
}