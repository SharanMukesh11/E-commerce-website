





import React, { useState } from 'react';
import './sign.css'; 

const AuthModal = () => {
  const [showSignIn, setShowSignIn] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });

  const toggleMode = () => {
    setShowSignIn(!showSignIn);
    setFormData({ email: '', password: '', name: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = showSignIn ? 'https://fakestoreapi.com/users' : 'https://fakestoreapi.com/users';

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Something went wrong');

      alert(`${showSignIn ? 'Signed In' : 'Signed Up'} successfully!`);
      
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <form className="modal-content" onSubmit={handleSubmit}>
          <h2>{showSignIn ? 'Sign In' : 'Sign Up'}</h2>

          {!showSignIn && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit">{showSignIn ? 'Sign In' : 'Sign Up'}</button>
          <p>
            {showSignIn ? "Don't have an account?" : 'Already have an account?'}{' '}
            <span className="modal-toggle" onClick={toggleMode}>
              {showSignIn ? 'Sign Up' : 'Sign In'}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
