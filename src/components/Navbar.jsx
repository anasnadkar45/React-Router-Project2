import React from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex justify-between items-center'>
        <Link to="/" className='flex  gap-2'>
          <img src={logo} alt="StudyNotion" className='w-10 '/>
          <h1 className='text-3xl text-white'>StudyNotion</h1>
        </Link>
        <nav>
          <ul className='flex gap-3'>
            <li>
              <NavLink to="/" >Home</NavLink>
            </li>
            <li>
              <NavLink to="/" >About</NavLink>
            </li>
            <li>
              <NavLink to="/" >Contact</NavLink>
            </li>
          </ul>
        </nav>

        {/* login - signup - logout - dashboard */}
        <div className='flex flex-row gap-3'>
          {
            <Link to="/login">
              <button>Login</button>
            </Link>
          }
          {
            <Link to="/signup">
              <button>Signup</button>
            </Link>
          }
          {
            <Link to="/">
              <button>Logout</button>
            </Link>
          }
          {
            <Link to="/dashboard">
              <button>Dashboard</button>
            </Link>
          }
        </div>
    </div>
  )
}

export default Navbar