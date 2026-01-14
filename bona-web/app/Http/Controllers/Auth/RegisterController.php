<?php
    
    namespace App\Http\Controllers\Auth;
    use App\Http\Controllers\Controller;
    use Illuminate\Http\Request;
    use Illuminate\Validation\Rules;
    use Illuminate\Support\Facades\Hash;
    use Illuminate\Support\Facades\Auth;
    use App\Models\User;
    class RegisterController extends Controller {
        public function store(Request $request)
        {
            $data = $request->all();

            try {
                $user = User::create([
                    'name'        => $data['name'].' '.$data['surname'],
                    'email'       => $data['email'],
                    'password'    => Hash::make($data['password']),
                    'phone'       => $data['phone'],
                    'birth_date'  => $data['birth_date'],
                    'address'     => $data['address'],
                    'postal_code' => $data['postal_code'],
                    'role'        => 'Bezero',
                ]);
            } catch (\Throwable $e) {
                dd('ERROR DB', $e->getMessage());
            }

            Auth::login($user);

            return redirect('/');
        }

    }