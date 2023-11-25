import React from 'react';
import './Home.css'

import Navigator from '../components/Navigator';

export default function Home({ account }) {
  return(
    <>
        <Navigator account={account}/>
        <main>
            <p>TRANSFER</p>
        </main>
    </>
  )
}