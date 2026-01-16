<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::table('pending_registrations', function (Blueprint $table) {
            $table->text('password')->change();  // ← STRING para Hash
        });
    }
    
    public function down(): void {
        Schema::table('pending_registrations', function (Blueprint $table) {
            $table->timestamp('password')->change();
        });
    }
};
