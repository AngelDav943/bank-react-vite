import React, { useEffect, useState } from 'react';
import './Home.css'

import Navigator from '../components/Navigator';

export default function Home({ account }) {
  console.log(account)

  const [transfers, setTransfers] = useState({});

  useEffect(() => {
    let id = parseInt(account.account)
    if (isNaN(id)) return

    fetch('https://bank.jedidiazfagundez.site/api/movements/'+(id+1))
    .then(data => data.json()).then(data => {
      console.log(data)
    })
  }, [])

  return(
    <>
        <Navigator account={account}/>
        <main>
            <center>
                <h2>Your balance</h2>
                <h1>${account.money}</h1>
            </center>
            <div>
                <p></p>
            </div>
        </main>
    </>
  )
}