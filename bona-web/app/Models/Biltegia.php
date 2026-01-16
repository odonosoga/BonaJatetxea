<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
class Biltegia extends Model
{
    protected $table = 'biltegia';
    protected $primaryKey = 'idBiltegia';

    protected $fillable = ['idLokala', 'produktuarenIzena', 'produktuarenDeskribapena', 'produktuKopurua'];

    public function lokala(): BelongsTo
    {
        return $this->belongsTo(Lokala::class, 'idLokala', 'idLokala');
    }

    public function osagaiak(): HasMany
    {
        return $this->hasMany(Osagaia::class, 'idBiltegia', 'idBiltegia');
    }

    public function hornitzaileak(): HasMany
    {
        return $this->hasMany(BiltegiHornitzailea::class, 'idInbentario', 'idBiltegia');
    }

}
