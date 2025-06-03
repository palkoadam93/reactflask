import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      setMsg('Kérlek, töltsd ki mindkét mezőt!');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      setMsg(data.message || data.error || 'Ismeretlen hiba történt.');
    } catch (err) {
      setMsg('Hiba a szerverrel való kommunikáció során.');
    }
  };

  return (
    <div>
      <h2>Bejelentkezés</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Felhasználónév"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Jelszó"
      />
      <button onClick={handleLogin}>Bejelentkezés</button>
      <p>{msg}</p>
    </div>
  );
}

export default Login;
