import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <header>
        <div className="head_content">
            <h1> 💱 Stock Scan Parser</h1>
            <p>A simple web app to parse stock scans and extract relevant information.</p>
        </div>
    </header>
  )
}

export default Header