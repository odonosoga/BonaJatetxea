<?php
namespace Database\Seeders;
use App\Models\User;
use App\Models\Langile;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class LangileakSeeder extends Seeder
{
    public function run(): void
    {
        // Crear users primero
        $langileUser1 = User::updateOrCreate(
            ['email' => 'langile1@bona.com'],
            [
                'name' => 'Langile 1',
                'role' => 'Langile',
                'password' => Hash::make('12345678'),
            ]
        );
        
        $adminUser = User::updateOrCreate(
            ['email' => 'admin@bona.com'],
            [
                'name' => 'Admin',
                'role' => 'Admina',
                'password' => Hash::make('12345678'),
            ]
        );

        // Crear langileak con user_id
        Langile::create([
            'user_id' => $langileUser1->id,
            'mota' => 'Langile',
        ]);
        
        Langile::create([
            'user_id' => $adminUser->id,
            'mota' => 'Admin',
        ]);

        Langile::create([
            'user_id' => User::where('email', 'pedro.jefe@test.com')->first()->id,  
            'mota' => 'Jefe sala',
        ]);
    }
}
