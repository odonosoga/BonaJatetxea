<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BiltegiHornitzailea extends Model
{
    protected $table = 'biltegi_hornitzailea';

    protected $fillable = [
        'idHornitzailea',
        'idInbentario',
        'prezio',
        'Data',
    ];

    protected $casts = [
        'Data' => 'date',
    ];

    public function hornitzailea(): BelongsTo
    {
        return $this->belongsTo(Hornitzailea::class, 'idHornitzailea', 'idHornitzailea');
    }

    public function biltegia(): BelongsTo
    {
        return $this->belongsTo(Biltegia::class, 'idInbentario', 'idBiltegia');
    }
}
