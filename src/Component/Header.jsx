import React from 'react'
import '../Component/footer.css'
import '../Component/Header.css'
import { Link,NavLink } from 'react-router-dom'
import { withTheme } from '@emotion/react'
function Header() {

  const setStyle=({isActive})=>{
    return{
      textDecoration: isActive?'none':'underline',
      color:isActive?'red':'white',
      fontSize:isActive?'25px':'25px'
    }
  }
  return (
    <div className='header-section'>
      <div className='header'>

        <NavLink style={setStyle} to={'/home'}>Home</NavLink>
        <NavLink style={setStyle} to={'/About'}>About</NavLink>
        <NavLink style={setStyle} to={'/Contact'}>Contact</NavLink>
        {/* <Link to={'./home'}><h1 style={{cursor:'pointer'}}>Home</h1></Link>
        <Link to='./about'><h1 style={{cursor:'pointer'}}>About</h1></Link>
        <Link to={'./contact'}><h1 style={{cursor:'pointer'}} >Contact</h1></Link> */}
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
