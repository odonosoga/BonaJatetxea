<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Erreserba extends Model
{
    protected $table = 'erreserbak';
    protected $primaryKey = 'id_erreserba';

    protected $fillable = ['user_id', 'idLokala', 'data', 'ordua', 'pertsona_Kop'];

    protected $casts = [
        'data' => 'date',
        'ordua' => 'datetime:H:i',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function lokala(): BelongsTo
    {
        return $this->belongsTo(Lokala::class, 'idLokala', 'idLokala');
    }
}
