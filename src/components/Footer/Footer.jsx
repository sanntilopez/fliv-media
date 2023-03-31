import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='footer bg-dark'>
      <div className='footer__box container'>
        <div className='row d-flex align-items-center gap-3 justify-content-center'>
          <div className='col-md-5 text-center'><img src="/img/logo.png" alt="fliv media" width={160}/></div>
          <div className='col-md-5 d-flex flex-column justify-content-center gap-3 footer__redes'>
            <h3 className='text-white'>Contacto</h3>
            <div className='redes d-flex gap-4'>
              <a href='https://www.instagram.com/flivmedia/' className='d-flex gap-1 align-items-center '><i className="fab fa-instagram"></i>@flivmedia</a>
              <a href="mailto:contacto@flivmedia.com" className='d-flex gap-1 align-items-center'><i className="fas fa-envelope"></i>contact@flivmedia.com</a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer