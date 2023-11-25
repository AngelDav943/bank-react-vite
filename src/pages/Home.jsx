import React from 'react';
import './Home.css'

import Navigator from '../components/Navigator';

export default function Home({ account }) {
  return(
    <>
        <Navigator account={account}/>
        <main>
            <center>
                <h2>Your balance</h2>
                <h1>${account.user.money}</h1>
            </center>
            <div>
                <p></p>
            </div>
        </main>
    </>
  )
}