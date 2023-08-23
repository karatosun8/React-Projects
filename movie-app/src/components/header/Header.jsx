import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <header>
        <div className="container flexSB">
            <nav className='flexSB'>
                <div className="logo">
                    <img src='.images/logo.png' alt=''/>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header