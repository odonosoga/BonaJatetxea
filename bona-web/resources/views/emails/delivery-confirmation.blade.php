<!DOCTYPE html>
<html lang="eu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eskaera Baieztatua - Bona Jatetxea</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body { 
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; 
            color: #333; 
            line-height: 1.6; 
            background-color: #f5f5f5;
        }
        .container { 
            width: 100%; 
            max-width: 600px; 
            margin: 0 auto; 
            background-color: white;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .header { 
            background: linear-gradient(135deg, #8d3236, #a83f42);
            color: white; 
            padding: 40px 30px; 
            text-align: center; 
        }
        .header h1 { 
            margin: 0; 
            font-size: 28px; 
            text-transform: uppercase; 
            letter-spacing: 2px; 
        }
        .content { 
            padding: 40px 30px; 
        }
        .footer { 
            background: #f9f9f9; 
            padding: 25px; 
            text-align: center; 
            font-size: 14px; 
            color: #777; 
            border-top: 1px solid #eee;
        }
        
        table { 
            width: 100%; 
            border-collapse: collapse; 
            margin: 25px 0; 
            background: white;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        th { 
            background: linear-gradient(135deg, #f8f9fa, #e9ecef);
            font-weight: 600; 
            text-align: left; 
            padding: 15px 12px;
            border-bottom: 2px solid #dee2e6;
            color: #495057;
        }
        td { 
            padding: 15px 12px; 
            border-bottom: 1px solid #eee; 
        }
        .total-row { 
            background: linear-gradient(135deg, #fff9f9, #ffebee) !important;
            border-top: 3px solid #8d3236;
        }
        .total-label { 
            font-weight: 700; 
            text-align: right; 
            color: #8d3236;
        }
        .total-amount { 
            font-size: 22px; 
            font-weight: 700; 
            color: #8d3236; 
        }
        
        .address-box { 
            background: linear-gradient(135deg, #f8f9fa, #e9ecef);
            padding: 20px; 
            border-radius: 12px; 
            margin: 25px 0; 
            border-left: 5px solid #8d3236; 
        }
        
        /* 🎫 CÓDIGO DE ENTREGA */
        .code-box {
            background: linear-gradient(135deg, #8d3236, #a83f42, #c4454a);
            color: white;
            padding: 30px 20px;
            border-radius: 16px;
            text-align: center;
            margin: 30px 0;
            box-shadow: 0 12px 35px rgba(141,50,54,0.4);
        }
        .code-title {
            margin: 0 0 15px 0;
            font-size: 20px;
            opacity: 0.95;
        }
        .code-number {
            font-size: 52px;
            font-weight: 800;
            letter-spacing: 12px;
            margin: 0 0 15px 0;
            text-shadow: 3px 3px 6px rgba(0,0,0,0.4);
            font-family: 'Courier New', monospace;
        }
        .code-instructions {
            margin: 0;
            font-size: 16px;
            opacity: 0.9;
            font-weight: 500;
        }

        .greeting {
            font-size: 24px;
            color: #8d3236;
            margin-bottom: 10px;
        }
        .status-info {
            background: #d4edda;
            border: 1px solid #c3e6cb;
            color: #155724;
            padding: 15px;
            border-radius: 8px;
            margin: 20px 0;
        }
        
        @media (max-width: 600px) {
            .code-number { font-size: 40px; letter-spacing: 8px; }
            .header { padding: 30px 20px; }
            .content { padding: 30px 20px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- HEADER -->
        <div class="header">
            <h1>Bona Jatetxea</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Eskaera baieztatua!</p>
        </div>
        
        <!-- CONTENIDO -->
        <div class="content">
            <!-- SALUDO -->
            <h2 class="greeting">Kaixo, {{ $data['name'] ?? 'bezeroa' }}!</h2>
            
            <p style="font-size: 16px; margin-bottom: 25px;">
                Eskerrik asko guregan konfiantza izateagatik. <strong>Zure eskaera ongi jaso dugu</strong> 
                eta sukaldean lanean gaude ahalik eta azkarren bidaltzeko.
            </p>

            <!-- CÓDIGO DE ENTREGA -->
            @if(isset($entregaKodea) && $entregaKodea)
            <div class="code-box">
                <h3 class="code-title">ENTREGA KODEA</h3>
                <div class="code-number">{{ $entregaKodea }}</div>
                <p class="code-instructions">
                    Gorde kode hau! Langileak bidalketa egiterakoan eskatuko du.
                </p>
            </div>
            @endif

            <!-- DIRECCIÓN -->
            <div class="address-box">
                <strong>Bidalketa helbidea:</strong><br>
                <span style="font-size: 16px;">{{ $data['address'] ?? 'Ez dago helbiderik' }}</span>
            </div>

            <!-- ESTADO -->
            <div class="status-info">
                <strong>Egoera aktuala:</strong> <span style="color: #28a745; font-weight: bold;">Zain daude eskaerak</span><br>
                <small>Laster iritsiko da zure eskaera!</small>
            </div>

            <!-- PRODUCTOS -->
            <h3 style="margin-bottom: 20px; color: #8d3236;">Eskaeraren xehetasunak:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Produktua</th>
                        <th style="text-align: center;">Kopurua</th>
                        <th style="text-align: right;">Prezioa</th>
                    </tr>
                </thead>
                <tbody>
                    @if(isset($cartItems) && count($cartItems) > 0)
                        @foreach($cartItems as $item)
                        <tr>
                            <td style="font-weight: 500;">{{ $item['name'] ?? 'Produktua' }}</td>
                            <td style="text-align: center; font-weight: 600;">{{ $item['quantity'] ?? 1 }}</td>
                            <td style="text-align: right; font-weight: 600;">
                                {{ number_format(($item['price'] ?? 0) * ($item['quantity'] ?? 1), 2) }}€
                            </td>
                        </tr>
                        @endforeach
                    @else
                        <tr>
                            <td colspan="3" style="text-align: center; color: #999; padding: 30px;">
                                Ez da produktuen informaziorik aurkitu.
                            </td>
                        </tr>
                    @endif
                </tbody>
                <tfoot>
                    <tr class="total-row">
                        <td colspan="2" class="total-label">GUZTIRA</td>
                        <td class="total-amount">{{ number_format($total ?? 0, 2) }}€</td>
                    </tr>
                </tfoot>
            </table>

            <p style="text-align: center; margin-top: 30px; font-style: italic; color: #666;">
                On egin! ✨<br>
                <small>Bona Jatetxea taldea</small>
            </p>
        </div>

        <!-- FOOTER -->
        <div class="footer">
            <p>&copy; {{ date('Y') }} Bona Jatetxea. Eskubide guztiak erreserbatuak.</p>
            <p style="margin-top: 5px; font-size: 12px;">
                <a href="#" style="color: #8d3236;">Laguntza behar baduzu?</a> | 
                <a href="#" style="color: #8d3236;">Gure webgunea</a>
            </p>
        </div>
    </div>
</body>
</html>
