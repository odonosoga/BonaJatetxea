<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Langile extends Model
{
    protected $table = 'langileak';
    protected $primaryKey = 'idLangile';
    protected $fillable = ['mota'];

    public function lokalenKokapenak()
    {
        return $this->hasMany(Lokala::class, 'idLangile');
    }

    public function txandak()
    {
        return $this->hasMany(LangileLokalenKokapena::class, 'idLangile');
    }
}
