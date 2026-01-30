<?php
namespace App\Http\Controllers;
use App\Mail\ReservationCreated;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;
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

        return Inertia::render('Erreserbak');
    }

    public function store(ErreserbaRequest $request)
    {
        if (!$request->user() || $request->user()->role !== 'Bezero') {
            return back()->withErrors(['auth' => '...']);
        }

        $data = $request->validated();

        // 1. Crear la reserva y guardarla en variable
        $erreserba = Erreserba::create([
            'idUser'       => Auth::id(),
            'idLokala'     => $data['location'],
            'data'         => $data['date'],
            'ordua'        => $data['hour'],
            'pertsona_Kop' => $data['people'],
        ]);

        // 2. Enviar el email al usuario autenticado
        // Usamos try/catch para que si falla el mail, no falle la reserva
        try {
            Mail::to($request->user()->email)->send(new ReservationCreated($erreserba));
        } catch (\Exception $e) {
            // Opcional: Loguear el error $e->getMessage()
        }

        return back()->with('success', 'Erreserba ondo bidali da! Email bat bidali dizugu.');
    }


}

