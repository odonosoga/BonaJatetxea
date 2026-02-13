<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\UsersSeeder;
use Database\Seeders\LangileSeeder;
use Database\Seeders\LokalenKokapenakSeeder;
use Database\Seeders\LangileLokalenKokapenaSeeder;
use Database\Seeders\EskaerakSeeder;
use Database\Seeders\PlaterakSeeder;
class DatabaseSeeder extends Seeder
{
    public function run(): void
    {  
        $this->call([
            UsersSeeder::class,             
            LangileSeeder::class,          
            LokalenKokapenakSeeder::class,  
            LangileLokalenKokapenaSeeder::class,
            EskaerakSeeder::class,
            PlaterakSeeder::class
        ]);
    }
}
