import React, { useState } from 'react';

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
        if (loginData.token) setToken(loginData);
    }

    return(
        <form onSubmit={ handleSubmit }>
        <label>
            <p>Username</p>
            <input type="text" onChange={e => setUser(e.target.value)}/>
        </label>
        <label>
            <p>Password</p>
            <input type="text" onChange={e => setPass(e.target.value)}/>
        </label>
        <div>
            <button type="submit">Submit</button>
        </div>
        </form>
    )
}