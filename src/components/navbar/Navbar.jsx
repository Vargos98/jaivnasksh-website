import './navbar.css'

import Logo from './Logo.png'

export default function Navbar() {
  return (
   <div className="navbar">
    <div className="nav-container">
      <div className="left">
       <img className="nav-image"src={Logo}  alt='logo' />
      </div>
      <div className="right">
        <ul className='list-items'>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="./About">About</a>
          </li>
          <li>
            <a href="./Services">Services</a>
          </li>
          <li>
            <a href="./Contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
   </div>
  )
}
