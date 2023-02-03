import React from 'react'
import '../Component/footer.css'
import '../Component/Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='header-section'>
      <div className='header'>
        <Link to={'./home'}><h1 style={{cursor:'pointer'}}>Home</h1></Link>
        <Link to='./about'><h1 style={{cursor:'pointer'}}>About</h1></Link>
        <Link to={'./contact'}><h1 style={{cursor:'pointer'}} >Contact</h1></Link>
        </div>
        
    </div>
  )
}

function Footer() {
  return (
    <div className='footer'>Footer</div>
  )
}

export  {Header,Footer}
