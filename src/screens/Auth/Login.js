// Login.js
import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

import '../../styles/login.css'

const logoIcon = require('../../assets/logo.svg').default

const validateEmail = (email) => {
    // Regular expression to check if the email format is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    // Check if the email is not empty and matches the valid email format
    if (email && email.trim() !== '' && emailRegex.test(email.trim())) {
        return true // Email is valid and not empty
    } else {
        return false // Email is empty or not in valid format
    }
}

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { login, authError, setAuthError } = useAuth()

    const handleLogin = (e) => {
        e.preventDefault()
        // Reset validation errors
        setAuthError('')

        // Basic email validation
        if (!email || !validateEmail(email)) {
            setAuthError('Please enter valid email address')
            return
        }

        // Basic password validation
        if (!password || !validateEmail(email)) {
            setAuthError('Password Required')
            return
        }

        // // Additional validation logic can be added here

        // Calling mock login
        login({ email, password })
    }

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)

    return (
        <div className="login-body center">
            <div className="login-block center">
                <h2>Login</h2>
                <img className="logo-image" src={logoIcon} alt="logo-avatar" />
                {authError && (
                    <span style={{ color: 'red' }} data-testid="login-error-span">
                        {authError}
                    </span>
                )}
                <input
                    className="input-box"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    data-testid="login-email"
                />
                <br />
                <input
                    className="input-box"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    data-testid="login-password"
                />
                <br />
                <button
                    data-testid="submit-button"
                    className="button"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>
        </div>
    )
}

export default Login
