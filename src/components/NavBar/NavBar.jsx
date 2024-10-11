import { useRef } from 'react'
import '../NavBar/NavBar.css'
import Menuicon from '../../assets/menu.jpg'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const navRef = useRef()
  const showNavbar = () => {
      navRef.current.classList.toggle("show-menu")
  }

  return (
    <header>
      <h3>CARTOON</h3>
      <nav ref={navRef}>
        <Link to='/'><a>HOME</a></Link>
        <a>CARTOON</a>
        <a>CATEGORIES</a>
        <a>CONTACT US</a>
        <img className='nav-btn nav-close' onClick={showNavbar} src={Menuicon} alt="" />
      </nav>
      <img className='nav-btn' onClick={showNavbar} src={Menuicon} alt="" />
    </header>
  )
}

export default NavBar