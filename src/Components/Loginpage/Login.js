import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';


const Login = () => {
  const [user, setUser] = useState(null);
  
  const [email, setEmail] = useState('jones3710@gmail.com');
  const [password, setPassword] = useState('123');
  const [error, setError] = useState('');

  const handleManualLogin = (e) => {
    e.preventDefault();
    if (email === 'jones3710@gmail.com' && password === '123') {
      setUser({ name: 'Manual User', email });
      setError('');
      alert(`Welcome ${email}`);
    } else {
      setError('Invalid email or password');
    }
  };

  const handleSuccess = (credentialResponse) => {
    const token = credentialResponse.credential;
    const decoded = jwtDecode(token);
    setUser(decoded);
    alert(`Welcome ${decoded.name}`);
    console.log('User Info:', decoded);
  };

  const handleError = () => {
    alert('Login failed. Please try again.');
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 50, textAlign: 'center' }}>
      <h2>Login with Google</h2>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />

      <hr style={{ margin: '30px 0' }} />

      <h2>Or login manually</h2>
      <form onSubmit={handleManualLogin} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
       <button type="submit">Login</button>
       
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {user && (
        <div style={{ marginTop: 20 }}>
          <h4>Logged in as:</h4>
          <p><strong>Name:</strong> {user.name || user.email}</p>
          <p><strong>Email:</strong> {user.email}</p>
          {user.picture && <img src={user.picture} alt="profile" width="100" style={{ borderRadius: '50%' }} />}
        </div>
      )}
    </div>
  );
};

export default Login;
