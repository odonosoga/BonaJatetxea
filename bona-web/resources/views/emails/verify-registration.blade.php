<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <style>
        /* Reset y base */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            padding: 20px;
            min-height: 100vh;
        }
        
        /* Container principal */
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.15);
            overflow: hidden;
            position: relative;
        }
        
        /* Header con imagen */
        .header {
            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
        }
        
        .logo-section {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 10px;
            letter-spacing: 1px;
        }
        
        .subtitle {
            font-size: 16px;
            opacity: 0.95;
            font-weight: 400;
        }
        
        /* Contenido principal */
        .content {
            padding: 50px 40px;
            text-align: center;
        }
        
        .greeting {
            font-size: 20px;
            margin-bottom: 30px;
            color: #2c3e50;
        }
        
        .greeting strong {
            color: #28a745;
            font-weight: 600;
        }
        
        .instruction {
            font-size: 18px;
            margin-bottom: 35px;
            color: #555;
            font-weight: 400;
        }
        
        /* Botón principal */
        .verify-btn {
            display: inline-block;
            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
            color: white !important;
            padding: 18px 50px;
            border-radius: 12px;
            text-decoration: none;
            font-weight: 700;
            font-size: 18px;
            box-shadow: 0 10px 30px rgba(40, 167, 69, 0.3);
            transition: all 0.3s ease;
            border: none;
            margin-bottom: 25px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .verify-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 15px 40px rgba(40, 167, 69, 0.4);
            background: linear-gradient(135deg, #218838 0%, #1ea085 100%);
            color: white !important;
        }
        
        /* Expiración */
        .expiry {
            background: linear-gradient(135deg, #ffc107 0%, #fd7e14 100%);
            color: #212529;
            padding: 12px 25px;
            border-radius: 10px;
            font-weight: 600;
            font-size: 16px;
            display: inline-block;
            margin-bottom: 30px;
            box-shadow: 0 5px 20px rgba(255, 193, 7, 0.3);
        }
        
        /* Footer */
        .footer {
            background: #f8f9fa;
            padding: 30px;
            text-align: center;
            color: #6c757d;
            font-size: 14px;
            border-top: 1px solid #e9ecef;
        }
        
        .footer strong {
            color: #495057;
        }
        
        /* Responsive */
        @media (max-width: 600px) {
            body { padding: 10px; }
            .content { padding: 40px 25px; }
            .header { padding: 30px 20px; }
            .verify-btn { padding: 16px 40px; font-size: 16px; }
            .footer { padding: 25px 20px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <div class="logo-section">BonaJatetxea</div>
            <div class="subtitle">Egiaztatu zure kontua</div>
        </div>
        
        <!-- Contenido -->
        <div class="content">
            <p class="greeting">
                Kaixo <strong>{{ $pending->name }} {{ $pending->surname ?? '' }}!</strong>
            </p>
            
            <p class="instruction">
                Egin klik botoian zure kontua egiaztatzeko eta lehen erreserba egiteko.
            </p>
            
            <a href="{{ route('registration.verify', [$pending->id, sha1($pending->email)]) }}" 
               class="verify-btn" 
               style="text-decoration: none;">
                Kontua Egiaztatu
            </a>
            
            <div class="expiry">
                Esteka hau 15 minututan iraungiko da
            </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
            <p>Erregistroa ez baduzu eskatua, alde batera utzi mezu hau.</p>
            <p><strong>BonaJatetxea</strong><br>Nafarroa Hiribidea, 2 - 20013 Donostia<br>Gipuzkoa</p>
        </div>
    </div>
</body>
</html>
