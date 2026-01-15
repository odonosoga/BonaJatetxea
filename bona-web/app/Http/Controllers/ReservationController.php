<?php
namespace App\Http\Controllers;

use App\Http\Requests\ErreserbaRequest;
use App\Models\Erreserba;
use Illuminate\Support\Facades\Auth;

class ReservationController extends Controller
{
    public function store(ErreserbaRequest $request)
    {
        $data = $request->validated();

        // Opcional: asegurar que el usuario es Bezero
        // if (Auth::user()->role !== 'Bezero') {
        //     abort(403);
        // }

        Erreserba::create([
            'user_id'      => Auth::id(),
            'idLokala'     => $data['location'],
            'data'         => $data['date'],
            'ordua'        => $data['hour'],
            'pertsona_Kop' => $data['people'],
        ]);

        return back()->with('success', 'Erreserba ondo bidali da!');
    }
}
