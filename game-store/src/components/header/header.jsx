import { useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../../contexts/authContext"


export default function Header() {
    return (
    
  <div>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
             
                <Link to="/" className="logo">
                  <img src="assets/images/logo.png" alt="Logo" style={{ width: '158px' }} />
                </Link>
                
                <ul className="nav">
                  <li><Link to="/" className="active">Home</Link></li>
                  <li><Link to="/games">Our Shop</Link></li>
                  <li><Link to="/create-game">Add Game</Link></li>
                  <li><Link to="/login">Sign In</Link></li>
                  <li><Link to="/logout">Logout</Link></li>
                  <li><Link to="/register">Register</Link></li>
                </ul>
                <Link to="/" className="menu-trigger" onClick={(e) => e.preventDefault()}>
                  <span>Menu</span>
                </Link>
               
              </nav>
            </div>
          </div>
        </div>
      </header>
   
     </div>
      
     
    );
  }
  