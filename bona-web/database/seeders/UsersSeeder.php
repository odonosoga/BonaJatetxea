<?php
// database/seeders/UsersSeeder.php
namespace Database\Seeders;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    public function run(): void
    {
        // BEZERO (cliente)
        User::create([
            'name' => 'Bezero Test',
            'email' => 'bezero@test.com',
            'phone' => '688123456',
            'role' => 'Bezero',
            'password' => Hash::make('12345678'),
        ]);

        // LANGILES (empleados)
        User::create([
            'name' => 'Juan García',
            'email' => 'juan.langile@test.com',
            'phone' => '600111222',
            'role' => 'Langile',
            'password' => Hash::make('12345678'),
        ]);

        User::create([
            'name' => 'Ana López',
            'email' => 'ana.admin@test.com',
            'phone' => '600333444',
            'role' => 'Admin',
            'password' => Hash::make('12345678'),
        ]);

        User::create([
            'name' => 'Pedro Ruiz',
            'email' => 'pedro.jefe@test.com',
            'phone' => '600555666',
            'role' => 'Langile',
            'password' => Hash::make('12345678'),
        ]);
    }
}
