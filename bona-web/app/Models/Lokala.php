<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Langile;

class Lokala extends Model
{

    protected $table = 'lokalen_kokapenak'; 
    

    protected $primaryKey = 'idLokala';
    

    protected $fillable = ['idLangile', 'kokapena'];

    public function langile()
    {
        return $this->belongsTo(Langile::class, 'idLangile');
    }
}
