import React,{useState} from 'react'
import "./Header.css"
import { Link} from 'react-router-dom'

const Header = () => {
    const [Mobile, setMobile] = useState(false)
  return (
    <header>
        <div className="container flexSB">
            <nav className='flexSB'>
                <div className="logo">
                    <img src='./images/logo.png' alt=''/>
                </div>
                <ul className={Mobile ? "navMenu-list":"flexSB"} onClick={()=>setMobile(false)}>
                    <Link to="/" className='li'>Home</Link>
                    <Link to="/movies" className='li'>Movies</Link>
                    <Link to="/pages" className='li'>Pages</Link>
                    <Link to="/pricing" className='li'>Pricing</Link>
                    <Link to="/contact" className='li'>Contact</Link>

                </ul>
                <button className='toggle' onClick={()=>setMobile(!Mobile)}>
                    {Mobile ? <i className='fa fa-times'></i>:<i className='fa fa-bars'></i>}
                </button>
            </nav>
            <div className="account flexSB">
                <i className='fa fa-search'></i>
                <i className='fa fa-bell'></i>
                <i className='fa fa-user'></i>
            </div>
            <button className='subscribe'> Subscribe Now</button>
        </div>
    </header>
  )
}

export default Header