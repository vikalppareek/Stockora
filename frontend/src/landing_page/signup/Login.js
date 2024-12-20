 import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State to hold error messages

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        setError(''); // Clear previous errors

        try {
            // Send data to backend
            const response = await axios.post('https://stockora-api.vercel.app/api/login', {
                name,
                mobile_no: mobile, // Match the backend field names
                password,
            });

            // If backend login is successful (status 200), redirect with query params
            if (response.status === 200) {
                const queryParams = new URLSearchParams({
                    name,
                    mobile,
                    password,
                }).toString();

                // Redirect to the target URL with the query parameters
                window.location.href = `https://trading-dashboard-frontend.vercel.app/?${queryParams}`;
            }
        } catch (error) {
            console.error('Error logging in:', error);

            // Handle error appropriately
            if (error.response) {
                console.log('Backend response data:', error.response.data); // Log the response data
                if (error.response.status === 401) {
                    setError('Invalid credentials. Please check your username, mobile number, or password.');
                } else if (error.response.status === 400) {
                    setError('Bad request. Please fill all fields correctly.');
                } else if (error.response.status === 500) {
                    setError('Server error. Please try again later.');
                } else {
                    setError('An unexpected error occurred. Please try again.');
                }
            } else if (error.request) {
                setError('Network error. Please check your internet connection.');
            } else {
                setError('An error occurred. Please try again.');
            }
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
                    <h2 className="form-title">Login to Stockora</h2>
                    {error && <div className="error-message">{error}</div>} {/* Display error message */}
                    <form onSubmit={handleLogin}>
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
                        <div className="form-actions">
                            <button type="submit" className="btn btn-blue">Login</button>
                        </div>
                    </form>
                    <div className="additional-links">
                        <span className="link" onClick={() => navigate('/forgot-password')}>Forgot Password?</span>
                        <br />
                        <span className="link" onClick={() => navigate('/signup')}>Create an Account</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
