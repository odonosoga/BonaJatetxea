<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LangileLokalenKokapena extends Model
{
    protected $table = 'langileak_lokalen_kokapenak';
    protected $fillable = ['idLokala', 'idLangile', 'data', 'data_tanda'];

    public function langile()
    {
        return $this->belongsTo(Langile::class, 'idLangile');
    }

    public function lokala()
    {
        return $this->belongsTo(Lokala::class, 'idLokala');
    }
}
