<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\LangileLokalenKokapena;
use App\Models\Langile;
use App\Models\Lokala;

class LangileLokalenKokapenaSeeder extends Seeder
{
    public function run(): void
    {
        $lokalak = Lokala::all();
        $langiles = Langile::all();

        if ($lokalak->isEmpty() || $langiles->isEmpty()) {
            return;
        }

        foreach ($lokalak as $lokala) {
            $langile = $langiles->random(); 

            LangileLokalenKokapena::create([
                'idLokala'  => $lokala->idLokala,
                'idLangile' => $langile->idLangile,
                'data' => now(),
                'data_tanda' => 'goiza', 
            ]);
        }
    }
}
