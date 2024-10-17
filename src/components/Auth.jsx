import React, { useState } from "react";
import { handleSignup, handleLogin, handleLogout } from "./auth/auth"; // yuqorida yaratgan funksiyalar

const AuthComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h2>Ro'yxatdan o'tish / Tizimga kirish</h2>
      
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <input
        type="password"
        placeholder="Parol"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => handleSignup(email, password)}>Ro'yxatdan o'tish</button>
      <button onClick={() => handleLogin(email, password)}>Tizimga kirish</button>
      <button onClick={handleLogout}>Tizimdan chiqish</button>
    </div>
  );
};

export default AuthComponent;
