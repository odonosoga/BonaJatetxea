<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\ErreserbaRequest;
use App\Models\Erreserba;
use Illuminate\Support\Facades\Auth;

class ReservationController extends Controller
{
    public function index(Request $request)
    {
        if (!$request->user() || $request->user()->role !== 'Bezero') {
            return back()
                ->withErrors(['auth' => 'Primero tienes que iniciar sesión como cliente (Bezero).'])
                ->with('require_auth', true);
        }

        return Inertia::render('Erreserbak'); // componente React de reservas
    }

    public function store(ErreserbaRequest $request)
    {
        if (!$request->user() || $request->user()->role !== 'Bezero') {
            return back()
                ->withErrors(['auth' => 'Primero tienes que iniciar sesión como cliente (Bezero).'])
                ->with('require_auth', true)
                ->withInput();
        }

        $data = $request->validated();

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

