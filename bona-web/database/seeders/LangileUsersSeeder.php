<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\User;

class LangileUsersSeeder extends Seeder
{
    public function run(): void
    {
        $users = [
            [
                'name' => 'Langile 1',
                'email' => 'langile1@example.com',
            ],
            [
                'name' => 'Langile 2',
                'email' => 'langile2@example.com',
            ],
            [
                'name' => 'Langile 3',
                'email' => 'langile3@example.com',
            ],
            [
                'name' => 'Langile 4',
                'email' => 'langile4@example.com',
            ],
        ];

        foreach ($users as $data) {
            User::updateOrCreate(
                ['email' => $data['email']],
                [
                    'name' => $data['name'],
                    'email_verified_at' => now(),
                    'password' => Hash::make('password'), // cambia la contraseña si quieres
                    'phone' => null,
                    'birth_date' => null,
                    'address' => null,
                    'postal_code' => null,
                    'role' => 'Langile',
                    'remember_token' => Str::random(10),
                ]
            );
        }
    }
}
