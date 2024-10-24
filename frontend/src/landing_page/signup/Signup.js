 import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [error, setError] = useState(null);  // State to store error message
    const [loading, setLoading] = useState(false); // State to handle loading

    const handleSignup = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        setError(null);  // Reset error state
        setLoading(true);  // Show loading state

        // Check if passwords match
        if (password !== retypePassword) {
            setError("Passwords do not match!");
            setLoading(false);
            return;
        }

        try {
            // Send signup data to backend using HTTPS
            const response = await axios.post('https://stockora-api.vercel.app/api/signup', {
                name,
                mobile_no: mobile,
                password,
            }, {
                timeout: 10000,  // Set a timeout for the request (10 seconds)
            });

            // If backend signup is successful (status 200), redirect with query params
            if (response.status === 200) {
                const queryParams = new URLSearchParams({
                    name,
                    mobile,
                    password,
                }).toString();

                // Redirect to the target URL with query parameters
                window.location.href = `https://trading-dashboard-frontend.vercel.app/?${queryParams}`;
            } else {
                setError('Signup failed, please try again.');
            }
        } catch (error) {
            console.error('Error signing up:', error);
            if (error.response && error.response.status === 500) {
                setError('Server error, please try again later.');
            } else {
                setError('Network error, please check your connection.');
            }
        } finally {
            setLoading(false); // Stop loading state
        }
    };

    return (
        <div className="container-signup">
            <header className="header text-center">
                <a href="/" className="logo kite-logo">
                    <img src="media/Stockoralogo.svg" alt="Stockora logo" />
                </a>
            </header>
            <div className="content">
                <div className="form-container">
                    <h2 className="form-title">Create Account</h2>
                    <form onSubmit={handleSignup}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-input"
                                placeholder="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
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
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-input"
                                placeholder="Retype Password"
                                value={retypePassword}
                                onChange={(e) => setRetypePassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && <p className="error-message">{error}</p>} {/* Display error */}
                        <div className="form-actions">
                            <button type="submit" className="btn btn-orange" disabled={loading}>
                                {loading ? 'Signing Up...' : 'Sign Up'}
                            </button>
                        </div>
                    </form>
                    <div className="additional-links">
                        <span className="link" onClick={() => navigate('/login')}>Already have an account? Login</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
