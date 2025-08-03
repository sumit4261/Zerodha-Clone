import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin, onSwitchToSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('http://localhost:3002/auth/login', { username, password });
      localStorage.setItem('token', res.data.token);
      onLogin && onLogin();
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div style={{
      maxWidth: 400,
      margin: '60px auto',
      padding: 32,
      border: '1px solid #e0e0e0',
      borderRadius: 12,
      background: '#fff',
      boxShadow: '0 2px 12px rgba(0,0,0,0.07)'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #ccc' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: 10, borderRadius: 6, background: '#1976d2', color: '#fff', border: 'none', fontWeight: 'bold', fontSize: 16 }}>Login</button>
        {error && <div style={{ color: 'red', marginTop: 12, textAlign: 'center' }}>{error}</div>}
      </form>
      <div style={{ marginTop: 18, textAlign: 'center' }}>
        Don't have an account?{' '}
        <button onClick={onSwitchToSignup} style={{ color: '#1976d2', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold' }}>Sign up</button>
      </div>
      <div style={{ marginTop: 24, color: '#888', fontSize: 13, textAlign: 'center' }}>
        <b>Sample login:</b><br />
        Username: <code>demo</code><br />
        Password: <code>demo123</code>
      </div>
    </div>
  );
};

export default Login;
