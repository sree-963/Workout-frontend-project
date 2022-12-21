import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useLogout } from '../../Hooks/useLogout'
import { useAuthContext } from '../../Hooks/useAuthContext'

const Navbar = () => {
  const { user } = useAuthContext()
  const { logout } = useLogout();
  const handleClick = () => {
    logout()
  }
  return (
    <div>
      <nav>
        <Link to='/' className='home'>WorkOutBuddy</Link>

        {user && (<div className="logout">
            <span style={{border:"1px solid white",padding:"8px"}}>{user.email}</span>&nbsp;
          <button onClick={handleClick}> Logout</button>
        </div>)}

        {
          !user && <div className="menu">
            <Link to='/signup'>Signup</Link>
            <Link to='/login'>Login</Link>
          </div>
        }

      </nav>
    </div>
  )
}

export default Navbar
