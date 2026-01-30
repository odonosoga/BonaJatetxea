<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Langile;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class UserController extends Controller
{
    // ★ TU MÉTODO EXISTENTE (lo mantengo intacto)
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

        return redirect()->back()->with('success', 'Langile creado correctamente.');
    }

    // ★ NUEVOS MÉTODOS CRUD (listados y editar)
    public function indexBezero()
    {
        $users = User::where('role', 'Bezero')->orderBy('name')->paginate(10);
        return view('admin.users.bezero.index', compact('users'));
    }

    public function indexLangile()
    {
        $users = User::where('role', 'Langile')->with('langile')->orderBy('name')->paginate(10);
        return view('admin.users.langile.index', compact('users'));
    }

    public function edit(User $user)
    {
        return view('admin.users.edit', compact('user'));
    }

    public function update(Request $request, User $user)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $user->id,
            'phone' => 'nullable|string|max:20',
            'address' => 'nullable|string|max:255',
            'postal_code' => 'nullable|string|max:10',
            'birth_date' => 'nullable|date',
            'mota' => 'nullable|string|max:100',
        ]);

        $user->update($data);

        if ($user->role === 'Langile' && $request->filled('mota')) {
            $user->langile()->updateOrCreate(['user_id' => $user->id], ['mota' => $request->mota]);
        }

        $route = $user->role === 'Bezero' ? 'admin.users.indexBezero' : 'admin.users.indexLangile';
        return redirect()->route($route)->with('success', 'Usuario actualizado correctamente.');
    }

    public function destroy(User $user)
    {
        if ($user->role === 'Langile') {
            $user->langile()->delete();
        }
        $user->delete();

        $route = $user->role === 'Bezero' ? 'admin.users.indexBezero' : 'admin.users.indexLangile';
        return redirect()->route($route)->with('success', 'Usuario eliminado correctamente.');
    }
}
