<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('erreserbak', function (Blueprint $table) {
            // si tienes todavía id_bezero con FK hacia bezeroak, elimínalo primero
            if (Schema::hasColumn('erreserbak', 'id_bezero')) {
                $table->dropForeign(['id_bezero']);
                $table->dropColumn('id_bezero');
            }

            $table->foreignId('user_id')
                  ->after('id_erreserba')
                  ->constrained('users'); // referencia a users.id
        });
    }

    public function down(): void
    {
        Schema::table('erreserbak', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
            $table->dropColumn('user_id');
        });
    }
};
