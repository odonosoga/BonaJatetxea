<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;

class PendingRegistration extends Model {
    protected $fillable = [
        'name','surname','email','password','phone','birth_date','address','postal_code','expires_at'
    ];
    
    protected $casts = [
        'expires_at' => 'datetime',
        'birth_date' => 'date',
        // QUITA password de casts (no timestamp)
    ];
    
    public function isExpired() {
        return $this->expires_at->isPast();
    }
}
