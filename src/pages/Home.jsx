import React from 'react';
import './Home.css'

export default function Home({ account }) {
  return(
    <>
        <nav>
            <span>{account.user.account}</span>
            <span>{account.user.name}</span>
        </nav>
        <main>
            <h2>{account.user.money}</h2>

        </main>
    </>
  )
}