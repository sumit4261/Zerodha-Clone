import React, { useState } from 'react';
import axios from 'axios';

const Signup = ({ onSignup, onSwitchToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await axios.post('http://localhost:3002/auth/register', { username, password });
      setSuccess('Signup successful! You can now log in.');
      setTimeout(() => {
        onSignup && onSignup();
      }, 1200);
    } catch (err) {
      setError(err.response?.data?.error || 'Signup failed');
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
      <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Sign Up</h2>
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
        <button type="submit" style={{ width: '100%', padding: 10, borderRadius: 6, background: '#388e3c', color: '#fff', border: 'none', fontWeight: 'bold', fontSize: 16 }}>Sign Up</button>
        {error && <div style={{ color: 'red', marginTop: 12, textAlign: 'center' }}>{error}</div>}
        {success && <div style={{ color: 'green', marginTop: 12, textAlign: 'center' }}>{success}</div>}
      </form>
      <div style={{ marginTop: 18, textAlign: 'center' }}>
        Already have an account?{' '}
        <button onClick={onSwitchToLogin} style={{ color: '#1976d2', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold' }}>Login</button>
      </div>
    </div>
  );
};

export default Signup;
