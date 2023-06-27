<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    
    public function register(Request $request)
    {
        $name = $request->input('name');
        $email = $request->input('email');
        $password = $request->input('password');

        // 在這裡處理註冊邏輯，例如創建新用戶並儲存到資料庫

        return response()->json(['user' => 'isSignIn']);
    }
}
