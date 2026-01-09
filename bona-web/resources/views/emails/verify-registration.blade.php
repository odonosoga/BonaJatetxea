<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body{font-family:Arial,sans-serif;margin:0;background:#f8f9fa;padding:20px;}
        .container{max-width:600px;margin:auto;background:white;padding:40px;border-radius:15px;box-shadow:0 10px 30px rgba(0,0,0,0.1);}
        .header{color:#28a745;font-size:24px;margin-bottom:20px;}
        .btn{display:inline-block;background:#28a745;color:white;padding:15px 40px;border-radius:8px;text-decoration:none;font-weight:bold;font-size:16px;}
        .btn:hover{background:#218838;}
        .footer{color:#6c757d;font-size:14px;margin-top:30px;text-align:center;}
    </style>
</head>
<body>
    <div class="container">
        <h2 class="header">🍽️ BonaJatetxea - Verifica tu cuenta</h2>
        <p>Hola <strong>{{ $pending->name }} {{ $pending->surname ?? '' }}</strong>!</p>
        <p>Haz clic para verificar tu cuenta:</p>
        <a href="{{ route('registration.verify', [$pending->id, sha1($pending->email)]) }}" class="btn">🔥 VERIFICAR CUENTA</a>
        <p style="color:#dc3545;"><strong>⏰ Expira en 15 minutos</strong></p>
        <p class="footer">Si no solicitaste esto, ignora este email.<br>BonaJatetxea - Irun, Gipuzkoa</p>
    </div>
</body>
</html>
