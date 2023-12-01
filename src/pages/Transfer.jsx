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

export default function Home({ account, setAccount }) {
    const [target, setUser] = useState();
    const [amount, setAmount] = useState();

    const [error, setError] = useState(null);

    const handleSubmit = async e => {
        e.preventDefault();

        let id = parseInt(account.account)+1
        if (isNaN(id)) return

        const data = await transfer({
            // Sin terminar
            // amount, token, account_receive e id
            "amount": parseInt(amount),
            "account_recive": target,

            "id": id,
            "token": account.token,
        });

        let newerror = null

        console.log("data:",data)
        if (data["new_money"]) {
            setAccount({...account, "money": data.new_money})
        } else {
            newerror = loginData.msg
        }

        setError(newerror)
    }

    return (
        <>
            <Navigator account={account} />
            <main>
                <div className='formHorizontal'>
                    <div className="formVertical">
                        <p>{account.money}</p>
                        <form onSubmit={handleSubmit}>
                            <input error={String(error != null)} placeholder='Account to transfer' type="text" onChange={e => setUser(e.target.value)} />
                            <input error={String(error != null)} placeholder='Amount' type="number" onChange={e => setAmount(e.target.value)} />
                            <input type="submit" value="Submit" />
                        </form>
                        {error && <span className="error">{error}</span>}
                    </div>
                </div>
            </main>
        </>
    )
}