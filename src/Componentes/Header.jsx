import React, { useEffect, useState } from 'react'
import styles from '../Componentes/Estilos/Header.module.css'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'

const Header = () => {

  
  return (      
    <nav className={styles.header}>
      <ul>
        <li>
        <NavLink to='' className={styles.link}>Filmes</NavLink>
        </li>
        <li>
        <NavLink to='/serie' className={styles.link}>Séries</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header