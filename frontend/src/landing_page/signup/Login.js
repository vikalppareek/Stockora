 // Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
        // Send data to backend
const response = await axios.post('https://stockora-api.vercel.app/api/login', {
    name,
    mobile_no: mobile, // Match the backend field names
    password,
});
        // If backend login is successful (status 200), navigate to the target URL with the query params
        if (response.status === 200) {
            // Create query params
            const queryParams = new URLSearchParams({
                name,
                mobile,
                password,
            }).toString();

            // Redirect using navigate with query params
            navigate(`/dashboard?${queryParams}`);
        }
    } catch (error) {
        console.error('Error logging in:', error);
        // Handle error appropriately (e.g., show a message to the user)
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
