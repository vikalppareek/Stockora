import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css'; // Add styles specific to the forgot password page

function ForgotPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleResetPassword = (e) => {
        e.preventDefault();
        // Handle the password reset logic here (API call, etc.)
        
        // Redirect to a confirmation or another page
        navigate('/'); // Change to the desired route
    };

    return (
        <div className="container-forgot-password">
            <header className="header text-center">
                <a href="/" className="logo">
                    <img src="media/Stockoralogo.svg" alt="Stockora logo" />
                </a>
            </header>
            <div className="content">
                <div className="form-container">
                    <form onSubmit={handleResetPassword} className="forgot-password-form">
                        <h2 className="form-title">Reset Password</h2>

                        <div className="form-group">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                                className="form-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-actions">
                            <button type="submit" className="btn btn-blue">
                                Send Reset Link
                            </button>
                        </div>

                        <div className="additional-links">
                            <p>
                                Remembered your password?{' '}
                                <span
                                    className="link"
                                    onClick={() => navigate('/')}
                                >
                                    Login
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
