 import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
    const navigate = useNavigate();
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);  // State to store error messages
    const [loading, setLoading] = useState(false); // State to handle loading

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent form submission
        setError(null);  // Reset error state
        setLoading(true);  // Show loading state

        try {
            // Send login data to backend using HTTPS
            const response = await axios.post('https://stockora-api.vercel.app/api/login', {
                mobile_no: mobile,
                password,
            }, {
                timeout: 10000,  // Set a timeout for the request (10 seconds)
            });

            // If backend login is successful (status 200), redirect with query params
            if (response.status === 200) {
                const queryParams = new URLSearchParams({
                    mobile,
                    password,
                }).toString();

                // Redirect to the dashboard or another page with the user details in query params
                window.location.href = `https://trading-dashboard-frontend.vercel.app/dashboard?${queryParams}`;
            } else {
                setError('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            if (error.response && error.response.status === 500) {
                setError('Server error. Please try again later.');
            } else if (error.code === 'ERR_NETWORK') {
                setError('Network error. Please check your connection.');
            } else {
                setError('Login failed. Please try again.');
            }
        } finally {
            setLoading(false);  // Stop loading state
        }
    };

    return (
        <div className="container-login">
            <header className="header text-center">
                <a href="/" className="logo kite-logo">
                    <img src="media/Stockoralogo.svg" alt="Stockora logo" />
                </a>
            </header>
            <div className="content">
                <div className="form-container">
                    <h2 className="form-title">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input
                                type="tel"
                                className="form-input"
                                placeholder="Mobile Number"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                required
                                pattern="[0-9]{10}"
                                title="Please enter a valid 10-digit mobile number."
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-input"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && <p className="error-message">{error}</p>} {/* Display error */}
                        <div className="form-actions">
                            <button type="submit" className="btn btn-orange" disabled={loading}>
                                {loading ? 'Logging In...' : 'Login'}
                            </button>
                        </div>
                    </form>
                    <div className="additional-links">
                        <span className="link" onClick={() => navigate('/signup')}>Don't have an account? Sign up</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
