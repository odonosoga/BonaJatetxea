<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Platera extends Model
{
    protected $table = 'platerak';
    protected $primaryKey = 'idPlatera';

    protected $fillable = [
        'idOsagai',
        'izena',
        'deskripzioa',
        'osagaiak_enum',
        'prezio',
        'argazkia',
    ];

    public function osagaia(): BelongsTo
    {
        return $this->belongsTo(Osagaia::class, 'idOsagai', 'idOsagai');
    }

    public function kartak(): HasMany
    {
        return $this->hasMany(Karta::class, 'idPlatera', 'idPlatera');
    }
}
