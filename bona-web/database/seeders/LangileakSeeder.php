<?php
// database/seeders/LangileakSeeder.php
namespace Database\Seeders;
use App\Models\Langile;
use Illuminate\Database\Seeder;

class LangileakSeeder extends Seeder
{
    public function run(): void
    {
        Langile::create(['mota' => 'Langile']);
        Langile::create(['mota' => 'Admin']); 
        Langile::create(['mota' => 'Jefe sala']);
    }
}
