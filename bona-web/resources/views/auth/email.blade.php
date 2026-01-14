<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Verifica tu correo</title>
</head>
<body>
    <h1>Verifica tu correo electrónico</h1>
    <p>Hemos enviado un enlace de verificación a tu correo. Por favor, revisa tu inbox.</p>

    <form method="POST" action="{{ route('verification.send') }}">
        @csrf
        <button type="submit">Reenviar correo de verificación</button>
    </form>
</body>
</html>
