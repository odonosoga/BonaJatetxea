<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
class Kontratua extends Model
{
    protected $table = 'kontratuak';
    protected $primaryKey = 'idKontratua';
    protected $fillable = ['idLangile', 'hasierako_data', 'amaierako_data', 'soldata'];
    protected $casts = ['hasierako_data' => 'date','amaierako_data' => 'date',];

    public function langilea(): BelongsTo
    {
        return $this->belongsTo(Langilea::class, 'idLangile', 'idLangile');
    }
}
