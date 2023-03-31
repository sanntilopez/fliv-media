import React from 'react'
import "./Header.css"


const Header = () => {
  return (
    <div className='header '>
        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid mx-3">
    <a className="navbar-brand" href="/"><img src="/img/logo.png" alt="Fliv Media" width={90}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className=" "><i className="fas fa-bars text-white fs-1"></i></span>
    </button>
    <div className="collapse navbar-collapse navbar__box " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#nosotros">Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#servicios">Servicios</a>
        </li>
      </ul>
      <a href="mailto:contacto@flivmedia.com" className='button'>Contactanos</a>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header