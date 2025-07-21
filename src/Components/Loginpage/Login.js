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
      setError('');
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
    <div style={{
      maxWidth: 400,
      margin: '50px auto',
      padding: 30,
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      borderRadius: 10,
      textAlign: 'center'
    }}>
      <h2>Manual Login</h2>
      <form onSubmit={handleManualLogin} style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: 10, borderRadius: 5, border: '1px solid #ccc' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: 10, borderRadius: 5, border: '1px solid #ccc' }}
        />
        <button type="submit" style={{
          padding: 10,
          borderRadius: 5,
          border: 'none',
          backgroundColor: '#007bff',
          color: '#fff',
          cursor: 'pointer'
        }}>
          Login
        </button>
      </form>

      {error && <p style={{ color: 'red', marginTop: 10 }}>{error}</p>}

      <div style={{ margin: '30px 0' }}>
      
      </div>

      <div>
        <h2>Login with Google</h2>
        <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
      </div>

      {user && (
        <div style={{ marginTop: 30 }}>
          <h4>Logged in as:</h4>
          <p><strong>Name:</strong> {user.name || user.email}</p>
          <p><strong>Email:</strong> {user.email}</p>
          {user.picture && (
            <img
              src={user.picture}
              alt="profile"
              width="100"
              style={{ borderRadius: '50%', marginTop: 10 }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
