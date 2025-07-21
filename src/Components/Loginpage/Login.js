import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('jones3710@gmail.com');
  const [password, setPassword] = useState('123');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleManualLogin = (e) => {
    e.preventDefault();
    if (email === 'jones3710@gmail.com' && password === '123') {
      const userData = { name: 'Manual User', email };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      alert(`Welcome ${email}`);
      navigate('/home');
    } else {
      setError('Invalid email or password');
    }
  };

  const handleSuccess = (credentialResponse) => {
    const token = credentialResponse.credential;
    const decoded = jwtDecode(token);
    setUser(decoded);
    localStorage.setItem('user', JSON.stringify(decoded));
    alert(`Welcome ${decoded.name}`);
    navigate('/home');
  };

  const handleError = () => {
    alert('Google login failed. Please try again.');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #141e30, #243b55)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
        padding: '20px',
      }}
    >
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.07)',
          borderRadius: '16px',
          padding: '35px 25px',
          width: '100%',
          maxWidth: '420px',
          boxShadow: '0 8px 40px rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          color: '#fff',
        }}
      >
        <h2 style={{ marginBottom: 20, fontWeight: 600, fontSize: '24px', textAlign: 'center' }}>
          🔐 Login to Continue
        </h2>

        <form
          onSubmit={handleManualLogin}
          style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: '12px 15px',
              borderRadius: '10px',
              border: 'none',
              outline: 'none',
              fontSize: '15px',
              background: '#fff',
              color: '#333',
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: '12px 15px',
              borderRadius: '10px',
              border: 'none',
              outline: 'none',
              fontSize: '15px',
              background: '#fff',
              color: '#333',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '12px',
              borderRadius: '10px',
              background: 'linear-gradient(to right, #ff6a00, #ee0979)',
              border: 'none',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
          >
            Login
          </button>
        </form>

        {error && (
          <p style={{ color: '#ff4d4d', marginTop: '10px', fontSize: '14px' }}>{error}</p>
        )}

        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '10px', fontSize: '16px' }}>Or sign in with Google</h3>
          <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
        </div>

        {user && (
          <div
            style={{
              marginTop: 30,
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '15px',
              borderRadius: '12px',
              textAlign: 'left',
            }}
          >
            <h4>Welcome:</h4>
            <p><strong>Name:</strong> {user.name || user.email}</p>
            <p><strong>Email:</strong> {user.email}</p>
            {user.picture && (
              <img
                src={user.picture}
                alt="profile"
                width="70"
                style={{ borderRadius: '50%', marginTop: 10 }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
