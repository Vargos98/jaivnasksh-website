import './header.css';
import image from './header.jpg';

export default function Header() {
  return (
    <section className='header-wrapper'>
      <div className="header-container">
        <div className="header-left">
        
          
        </div>
        <div className="header-right">
         
          <div >
            <img className="header-image" src={image} alt="brewery machine" />
          </div>
        </div>
      </div>
    </section>
  )
}
