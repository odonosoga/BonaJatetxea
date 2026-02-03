<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {  

        $this->call([
           UsersSeeder::class,             
           LangileUsersSeeder::class,
           LangileakSeeder::class,          
        LokalenKokapenakSeeder::class,       
        LangileLokalenKokapenaSeeder::class,
            LangileSeeder::class
        ]);
    }
}
