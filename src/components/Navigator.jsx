import React from 'react';
import { Link } from "react-router-dom"

import './Navigator.css'

export default function({account})
{
    return (
        <header>
            <nav>
                <span>LOGO</span>
                <Link to="/">Home</Link>
                <Link to="/Transfer">Transfer</Link>
            </nav>

            <div className="info">
                <span>Welcome back, {account.user.name}</span>
                <span>{account.user.account}</span>
            </div>
        </header>
    )
}