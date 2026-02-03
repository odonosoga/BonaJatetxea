<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Langile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;

class LangileSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create('es_ES');
        
        $tipos = [
            'Sukaldari', 'Zerbitzari', 'Banatzaile', 'Garbitzaile', 
            'Jefe de Cocina', 'Ayudante de Cocina', 'Camarero', 'Pinche'
        ];

        // ✅ LIMPIEZA SEGURA: Desactivar FK temporalmente
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');

        // Eliminar datos dependientes primero
        DB::table('langileak_lokalen_kokapenak')->delete(); // Tabla hija
        DB::table('langileak')->delete(); // Langileak
        User::where('role', 'Langile')->delete(); // Users

        // Reactivar FK
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        // Crear 100 nuevos trabajadores
        for ($i = 0; $i < 100; $i++) {
            $nombre = $faker->firstName();
            $apellido1 = $faker->lastName();
            $email = strtolower($nombre . '.' . substr($apellido1, 0, 3) . rand(10,99) . '@bonajatetxea.es');
            
            $user = User::create([
                'name' => $nombre . ' ' . $apellido1,
                'email' => $email,
                'email_verified_at' => now(),
                'password' => Hash::make('password123'),
                'phone' => '94' . $faker->numberBetween(100000, 999999), // Teléfonos Bilbao
                'birth_date' => $faker->dateTimeBetween('-45 years', '-25 years')->format('Y-m-d'),
                'address' => $faker->streetName() . ', ' . $faker->buildingNumber(),
                'postal_code' => $faker->numberBetween(48000, 48999), // Bilbao códigos
                'role' => 'Langile',
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            $user->langile()->create([
                'mota' => $tipos[array_rand($tipos)],
            ]);
        }

        $this->command->info('✅ 100 Langileak creados SIN errores!');
        $this->command->info('📧 Emails: nombre.apellidoXX@bonajatetxea.es');
        $this->command->info('🔑 Contraseña: password123');
        $this->command->info('📱 Teléfonos Bilbao (94XXXXXXXX)');
    }
}
