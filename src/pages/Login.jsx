import React, { useState } from 'react';
import './Login.css'

async function login(data) {
    return fetch('https://bank.jedidiazfagundez.site/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(data => data.json())
}

export default function Login({ setToken }) {
    const [username, setUser] = useState();
    const [password, setPass] = useState();

    const [error, setError] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const loginData = await login({
            "account": username,
            "password": password,
        });

        // Si devuelve token guardar datos
        if (loginData.token) setToken(loginData);
    }

    return (
        <div className='formCenter'>
            <form onSubmit={handleSubmit}>
                <h1>Log In</h1>
                <input placeholder='Account' type="text" onChange={e => setUser(e.target.value)} />
                <input placeholder='Password' type="password" onChange={e => setPass(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}