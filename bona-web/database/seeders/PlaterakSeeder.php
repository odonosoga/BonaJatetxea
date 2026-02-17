<?php
namespace Database\Seeders;

use App\Models\Platera;
use Illuminate\Database\Seeder;

class PlaterakSeeder extends Seeder
{
    public function run(): void
    {
        $platos = [
            ['Lenteja zopak', 'Lekalez egindako zope beroa', 'Lentejak, azenarioak, patata, tipula', 5.00, 'sopa', 'starters', 'lentilSoup'],
            ['Barazki krematsua', 'Barazki freskoekin egindako krema leuna', 'Kalabazina, patata, tipula', 4.00, 'crema', 'starters', 'garlicCream'],
            ['Oilasko errea', 'Labean poliki egositako oilaskoa', 'Oilaskoa, albahaca, olioa', 8.00, 'pollo', 'meat', 'roastChicken'],
            ['Txahal solomoa', 'Txahal solomoa patata purearekin', 'Txahal, patata, gurina', 10.00, 'carne2', 'meat', 'beefTenderloin'],
            // ... resto de tus 12 platos
        ];

        foreach ($platos as $plato) {
            Platera::create([
                'izena' => $plato[0],
                'deskripzioa' => $plato[1],
                'osagaiak' => $plato[2],
                'prezioa' => $plato[3],
                'argazkia' => '/img/' . $plato[4] . '.jpg',
                'sectionKey' => $plato[5],
                'translationKey' => $plato[6],
            ]);
        }
    }
}
