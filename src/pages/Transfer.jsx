import React, { useState } from 'react';
import './Home.css'

import Navigator from '../components/Navigator';

async function transfer(data) {
    return fetch('https://bank.jedidiazfagundez.site/api/movements', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(data => data.json())
}

export default function Home({ account }) {
    const [target, setUser] = useState();
    const [amount, setAmount] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const data = await login({
            // Sin terminar
        });
    }

    return(
        <>
            <Navigator account={account}/>
            <main>
                <form onSubmit={handleSubmit}>
                    <input placeholder='Account to transfer' type="text" onChange={e => setUser(e.target.value)} />
                    <input placeholder='Amount' type="number" onChange={e => setAmount(e.target.value)} />
                    <input type="submit" value="Submit" />
                </form>
            </main>
        </>
    )
}