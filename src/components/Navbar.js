import React from 'react'
import '../styles/Navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar__logo'>ICFES 280 MINIMO</div>
        <ul>
            <li><a href="/inicio">Inicio</a></li>
            
            <li><a href="/simulacro">Simulacro</a></li>

            <li><a href="/estudiantes">Estudiantes</a></li>
            
            <li><a href="/about">About</a></li>
        </ul>
    </div>
  )
}
