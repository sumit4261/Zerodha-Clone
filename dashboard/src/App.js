import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [showSignup, setShowSignup] = useState(false);

  if (!isLoggedIn) {
    return showSignup ? (
      <Signup onSignup={() => setShowSignup(false)} onSwitchToLogin={() => setShowSignup(false)} />
    ) : (
      <Login onLogin={() => setIsLoggedIn(true)} onSwitchToSignup={() => setShowSignup(true)} />
    );
  }

  return <Dashboard />;
}

export default App;
