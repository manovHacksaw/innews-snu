import React from 'react'
import { navs } from '../assets/data'
import './navbar.css'

export default function Nav() {
  return (
    <div>
        <nav id="navbar" className="navbar">
            <h1>News Scope</h1>
            <ul>
            {navs.map((nav) => (
                <li key={nav.id}>
                <a href={nav.link}>
                    {nav.name}
                </a>
                </li>
            ))}
            </ul>
        </nav>
    </div>
  )
}
