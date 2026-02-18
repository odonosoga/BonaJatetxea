<?php
namespace App\Http\Controllers;

use App\Mail\DeliveryConfirmed;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class EskaeraController extends Controller
{
    public function index()
    {
        return DB::table('eskaerak')->orderBy('updated_at', 'desc')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'surname' => 'required|string|max:255',
            'email' => 'required|email',
            'address' => 'required|string|max:255',
            'cartItems' => 'required|array|min:1',
            'cartTotal' => 'required|numeric|min:0.01'
        ]);

        // 🎫 CÓDIGO 5 DÍGITOS
        $entregaKodea = str_pad(rand(0, 99999), 5, '0', STR_PAD_LEFT);

        // GUARDAR
        $eskaeraId = DB::table('eskaerak')->insertGetId([
            'eskaeraData' => now()->toDateString(),
            'eskaerarenEgoera' => 'zain',
            'ordainketaMota' => $request->payment_method,
            'entregaHelbidea' => $request->address,
            'entregaKodea' => $entregaKodea,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        // 📧 EMAIL
        $customerData = [
            'name' => $request->name . ' ' . $request->surname,
            'address' => $request->address,
            'email' => $request->email,
            'entrega_kodea' => $entregaKodea
        ];

        try {
            Mail::to($request->email)->send(
                new DeliveryConfirmed($customerData, $request->cartItems, $request->cartTotal)
            );
            Log::info("Email enviado a {$request->email} - Código: {$entregaKodea}");
        } catch (\Exception $e) {
            Log::error("Email falló ID {$eskaeraId}: " . $e->getMessage());
        }

        // ✅ RESPUESTA Inertia
        return back()->with('success', 'Eskaera ongi sortua!');
    }

    public function updateStatus(Request $request, $id)
    {
        $request->validate([
            'eskaerarenEgoera' => 'required|in:zain,bidalketan,entregatuta'
        ]);

        DB::table('eskaerak')
            ->where('id_eskaera', $id)
            ->update([
                'eskaerarenEgoera' => $request->eskaerarenEgoera,
                'updated_at' => now()
            ]);

        return response()->json(['success' => true]);
    }
}
