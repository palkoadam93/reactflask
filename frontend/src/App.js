import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  const [page, setPage] = useState('home'); // 'home', 'register', 'login'

  return (
    <div style={{ padding: 20 }}>
      {page === 'home' && (
        <>
          <h1>Üdvözöllek az alkalmazásban!</h1>
          <button onClick={() => setPage('register')}>Regisztráció</button>
          <button onClick={() => setPage('login')} style={{ marginLeft: 10 }}>
            Bejelentkezés
          </button>
        </>
      )}

      {page === 'register' && (
        <>
          <Register />
          <button onClick={() => setPage('home')} style={{ marginTop: 10 }}>
            Vissza
          </button>
        </>
      )}

      {page === 'login' && (
        <>
          <Login />
          <button onClick={() => setPage('home')} style={{ marginTop: 10 }}>
            Vissza
          </button>
        </>
      )}
    </div>
  );
}

export default App;
