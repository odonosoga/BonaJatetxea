<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Langile;
use App\Models\RecoveryUser;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $allUsers = User::with('langile')->orderBy('name')->get();

        $recoveryUsers = RecoveryUser::orderBy('id', 'desc')->get()->map(function ($user) {
            return [
                'id'          => $user->id,
                'original_id' => $user->original_id,
                'name'        => $user->name,
                'email'       => $user->email,
                'role'        => $user->role,
                'phone'       => $user->phone,
                'address'     => $user->address,
                'postal_code' => $user->postal_code,
                'birth_date'  => $user->birth_date,
                'mota'        => $user->mota,
                'deleted_at'  => $user->deleted_at ?? null,
            ];
        })->values()->all();

        return Inertia::render('admin', [
            'users'         => ['data' => $allUsers],
            'recoveryUsers' => $recoveryUsers,
        ]);
    }

    public function storeLangile(Request $request)
    {
        $data = $request->validate([
            'name'        => 'required|string|max:255',
            'email'       => 'required|email|unique:users,email',
            'password'    => 'required|string|min:8',
            'phone'       => 'nullable|string',
            'birth_date'  => 'nullable|date',
            'address'     => 'nullable|string',
            'postal_code' => 'nullable|string',
            'mota'        => 'required|string',
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

        return redirect()->route('admin.users.index')
            ->with('success', 'Langile creado correctamente.');
    }

    public function update(Request $request, User $user)
    {
        $data = $request->validate([
            'name'        => 'required|string|max:255',
            'email'       => 'required|email|unique:users,email,' . $user->id,
            'phone'       => 'nullable|string|max:20',
            'address'     => 'nullable|string|max:255',
            'postal_code' => 'nullable|string|max:10',
            'birth_date'  => 'nullable|date',
            'mota'        => 'nullable|string|max:100',
        ]);

        $user->update($data);

        if ($user->role === 'Langile' && $request->filled('mota')) {
            $user->langile()->updateOrCreate(
                ['user_id' => $user->id],
                ['mota' => $request->mota]
            );
        }

        return redirect()->route('admin.users.index')
            ->with('success', 'Usuario actualizado correctamente.');
    }

    public function destroy(User $user)
    {
        // ✅ Guardamos también la contraseña hasheada
        RecoveryUser::create([
            'original_id' => $user->id,
            'name'        => $user->name,
            'email'       => $user->email,
            'password'    => $user->password,
            'role'        => $user->role,
            'phone'       => $user->phone,
            'address'     => $user->address,
            'postal_code' => $user->postal_code,
            'birth_date'  => $user->birth_date,
            'mota'        => $user->langile?->mota,
            'deleted_at'  => now(),
        ]);

        if ($user->role === 'Langile') {
            $user->langile()->delete();
        }

        $user->delete();

        return redirect()->route('admin.users.index')
            ->with('success', 'Erabiltzailea ezabatu eta berreskuratze zerrendan gorde da.');
    }

    public function restore($id)
    {
        $recovery = RecoveryUser::findOrFail($id);

        if (User::where('email', $recovery->email)->exists()) {
            return redirect()->route('admin.users.index')
                ->with('error', 'Email hori dagoeneko erabiltzen ari da. Ezin da berreskuratu.');
        }

        // ✅ Restauramos con la contraseña original (ya hasheada, sin Hash::make)
        $user = User::create([
            'name'        => $recovery->name,
            'email'       => $recovery->email,
            'password'    => $recovery->password,
            'role'        => $recovery->role,
            'phone'       => $recovery->phone,
            'address'     => $recovery->address,
            'postal_code' => $recovery->postal_code,
            'birth_date'  => $recovery->birth_date,
        ]);

        if ($recovery->role === 'Langile' && $recovery->mota) {
            $user->langile()->create([
                'mota' => $recovery->mota,
            ]);
        }

        $recovery->delete();

        return redirect()->route('admin.users.index')
            ->with('success', 'Erabiltzailea berreskuratu da.');
    }

    public function forceDelete($id)
    {
        RecoveryUser::findOrFail($id)->delete();

        return redirect()->route('admin.users.index')
            ->with('success', 'Erabiltzailea betirako ezabatu da.');
    }
}