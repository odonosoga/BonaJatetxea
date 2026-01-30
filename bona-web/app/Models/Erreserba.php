<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;  // Añade esta importación

class Erreserba extends Model
{
    protected $table = 'erreserbak';
    protected $primaryKey = 'id_erreserba';
    protected $fillable = [
        'idUser', 'idLokala', 'data', 'ordua', 'pertsona_Kop',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'idUser');
    }

    public function lokala()
    {
        return $this->belongsTo(Lokala::class, 'idLokala');
    }
}
