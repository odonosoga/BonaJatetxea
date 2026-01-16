<?php

namespace App\Mail;

use App\Models\PendingRegistration;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class VerifyRegistration extends Mailable
{
    use Queueable, SerializesModels;

    public $pending;

    public function __construct(PendingRegistration $pending)
    {
        $this->pending = $pending;
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: '🍽️ BonaJatetxea - Verifica tu cuenta',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.verify-registration',  // ← Vista abajo
        );
    }
}
