<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserController extends Controller
{
    use ThrottlesLogins;

    public function username()
    {
        return 'username';
    }

    /**
     * Logs in user if provided credentials are correct
     * @param Request $request
     * @throws ValidationException
     */
    public function login(Request $request)
    {
        // Login throttling, if user provides non-valid credentials he is blocked
        // from making attempts to login for 1 min
        if ($this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);
            return $this->sendLockoutResponse($request);
        }

        // JWT token is send if credentials are correct
        $credentials = $request->only(['username', 'password']);

        if (!$token = JWTAuth::attempt($credentials)) {
            $this->incrementLoginAttempts($request);
            return abort(400, 'Provided data was incorrect!');
        } else {
            $token = JWTAuth::attempt($credentials);

            return new JsonResponse([
                "token" => $token,
            ]);
        }
    }

    /**
     * Authenticates user before accessing admin panel
     * @return JsonResponse
     */
    public function checkUser(): JsonResponse
    {
        return new JsonResponse([
            "user" => auth()->user(),
            "valid" => auth()->check()
        ]);
    }
}
