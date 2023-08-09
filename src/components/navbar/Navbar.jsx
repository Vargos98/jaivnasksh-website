import './navbar.css'
import Logo from './Logo.png'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="left">
          <img className="logo"src={Logo} alt="logo"/>
        </div>
        <div className="right">
          <ul className='list__items'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
