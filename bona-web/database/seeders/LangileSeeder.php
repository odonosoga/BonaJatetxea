<?php
// database/seeders/LangileSeeder.php
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
        
        $diasOpciones = [
            '12:00–16:00',
            '19:00–23:00', 
            '12:00–16:00 / 19:00–23:00',
            'Libre'
        ];

        // ✅ LIMPIEZA SEGURA (solo Langile role)
        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        User::where('role', 'Langile')->delete();
        DB::table('langileak')->delete();
        DB::statement('SET FOREIGN_KEY_CHECKS=1');

        // Crear 10 Langiles COMPLETOS (User + Langile)
        for ($i = 0; $i < 10; $i++) {
            $nombre = $faker->firstName();
            $apellido = $faker->lastName();
            
            // ✅ UTF-8 SAFE email
            $email = mb_strtolower($nombre . '.' . mb_substr($apellido, 0, 3) . rand(10,99) . '@bonajatetxea.es');
            
            // Crear User PRIMERO
            $user = User::create([
                'name' => $nombre . ' ' . $apellido,
                'email' => $email,
                'email_verified_at' => now(),
                'password' => Hash::make('12345678'),
                'phone' => '94' . $faker->numberBetween(100000, 999999),
                'birth_date' => $faker->dateTimeBetween('-45 years', '-25 years')->format('Y-m-d'),
                'address' => $faker->streetName() . ', ' . $faker->buildingNumber(),
                'postal_code' => $faker->numberBetween(48000, 48999),
                'role' => 'Langile',
            ]);

            // Crear Langile con horarios
            $user->langile()->create([
                'mota' => $tipos[array_rand($tipos)],
                'monday' => $diasOpciones[array_rand($diasOpciones)],
                'tuesday' => $diasOpciones[array_rand($diasOpciones)],
                'wednesday' => $diasOpciones[array_rand($diasOpciones)],
                'thursday' => $diasOpciones[array_rand($diasOpciones)],
                'friday' => $diasOpciones[array_rand($diasOpciones)],
                'saturday' => $diasOpciones[array_rand($diasOpciones)],
                'sunday' => $diasOpciones[array_rand($diasOpciones)],
            ]);
        }

        $this->command->info('✅ 10 Langileak + Users creados con horarios!');
        $this->command->info('📧 Emails: nombre.apellidoXX@bonajatetxea.es');
        $this->command->info('🔑 Password: 12345678');
    }
}
