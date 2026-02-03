<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #1f2937;
            background-color: #f9fafb;
            padding: 24px;
            min-height: 100vh;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .header {
            background: #8d3236;
            color: #ffffff;
            padding: 32px 32px 24px;
            text-align: center;
        }
        .logo { font-size: 28px; font-weight: 600; margin-bottom: 4px; }
        .header-subtitle { font-size: 16px; opacity: 0.9; }
        .content {
            padding: 40px 32px;
            text-align: center;
        }
        .greeting {
            font-size: 20px;
            margin-bottom: 24px;
            color: #111827;
        }
        .greeting strong { color: #1e40af; }
        .instruction {
            font-size: 16px;
            margin-bottom: 32px;
            color: #4b5563;
            max-width: 480px;
            margin-left: auto;
            margin-right: auto;
        }
        .verify-btn {
            display: inline-block;
            background: #8d3236;
            color: #ffffff !important;
            padding: 16px 32px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 16px;
            border: none;
            transition: background 0.2s;
            margin-bottom: 24px;
        }
        .verify-btn:hover {
            background: #8d3236;
            color: #ffffff !important;
        }
        .expiry {
            background: #fef3c7;
            color: #92400e;
            padding: 12px 20px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            border-left: 4px solid #f59e0b;
            margin-bottom: 32px;
        }
        .footer {
            background: #f9fafb;
            padding: 32px;
            text-align: center;
            color: #6b7280;
            font-size: 14px;
            border-top: 1px solid #e5e7eb;
        }
        .footer-address { font-size: 13px; margin-top: 8px; }
        @media (max-width: 600px) {
            body { padding: 16px; }
            .content, .header { padding-left: 24px; padding-right: 24px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">BonaJatetxea</div>
            <div class="header-subtitle">Egiaztatu zure kontua</div>
        </div>
        
        <div class="content">
            <p class="greeting">
                Kaixo <strong>{{ $pending->name }} {{ $pending->surname ?? '' }}!</strong>
            </p>
            
            <p class="instruction">
                Zure kontua egiaztatzeko eta BonaJatetxeako zerbitzu guztiak erabiltzeko, egin klik beheko botoian.
            </p>
            
            <a href="{{ route('registration.verify', [$pending->id, sha1($pending->email)]) }}" 
               class="verify-btn">
                Kontua Egiaztatu
            </a>
            
            <div class="expiry">
                Esteka hau 15 minututan iraungiko da
            </div>
        </div>
        
        <div class="footer">
            <p>Erregistro hau ez baduzu eskatua, mesedez alde batera utzi mezu hau.</p>
            <p class="footer-address">
                <strong>BonaJatetxea</strong><br>
                Nafarroa Hiribidea, 2 - 20013 Donostia<br>
                Gipuzkoa | bonajatetxea@gmail.com
            </p>
        </div>
    </div>
</body>
</html>
