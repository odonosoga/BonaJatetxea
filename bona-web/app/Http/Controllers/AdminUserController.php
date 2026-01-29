<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Langile;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class AdminUserController extends Controller
{
    public function storeLangile(Request $request)
{
    $data = $request->validate([
        'name'  => 'required|string|max:255',
        'email' => 'required|email|unique:users,email',
        'password' => 'required|string|min:8',
        'phone' => 'nullable|string',
        'birth_date' => 'nullable|date',
        'address' => 'nullable|string',
        'postal_code' => 'nullable|string',
        'mota' => 'required|string',
    ]);

    $user = User::create([
        'name'        => $data['name'],
        'email'       => $data['email'],
        'password'    => Hash::make($data['password']),
        'phone'       => $data['phone'] ?? null,
        'birth_date'  => $data['birth_date'] ?? null,
        'address'     => $data['address'] ?? null,
        'postal_code' => $data['postal_code'] ?? null,
        'role'        => 'Langile',
    ]);

   
    $user->langile()->create([
        'mota' => $data['mota'],
    ]);

}

}
