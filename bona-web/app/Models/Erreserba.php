<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
class Erreserba extends Model
{
    protected $table = 'erreserbak';
    protected $primaryKey = 'id_erreserba';
    protected $fillable = ['id_bezero', 'idLokala', 'data', 'ordua', 'pertsona_Kop'];

    protected $casts = [
        'data' => 'date',
        'ordua' => 'datetime:H:i',
    ];

    public function bezeroa(): BelongsTo
    {
        return $this->belongsTo(Bezeroa::class, 'id_bezero', 'id_bezero');
    }

    public function lokala(): BelongsTo
    {
        return $this->belongsTo(Lokala::class, 'idLokala', 'idLokala');
    }
}
