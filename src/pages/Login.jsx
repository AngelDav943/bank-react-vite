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

export default function Login({ setAccount }) {
    const [username, setUser] = useState();
    const [password, setPass] = useState();

    const [error, setError] = useState(null);

    const handleSubmit = async e => {
        e.preventDefault();
        const loginData = await login({
            "account": username,
            "password": password,
        });

        let newerror = null

        // Si devuelve token guardar datos
        if (loginData.token) {
            setAccount({...loginData.user, "token":loginData.token});
        } else {
            newerror = loginData.msg
        }

        setError(newerror)
    }

    return (
        <div className='formHorizontal'>
            <div className="formVertical">
                <h1>Log In</h1>
                <form onSubmit={handleSubmit}>
                    <input error={String(error != null)} placeholder='Account' type="text" onChange={({target: {value}}) => setUser(value)} />
                    <input error={String(error != null)} placeholder='Password' type="password" onChange={({target: {value}}) => setPass(value)} />
                    <input type="submit" value="Submit" />
                </form>
                {error && <span className="error">{error}</span>}
            </div>
        </div>
    )
}