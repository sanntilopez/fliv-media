import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <section className='hero'>

                    <div className="container text-center d-flex flex-column gap-5 justify-content-center align-items-center">
                        <div className="info">
                            <h1>Aumente sus ganancias</h1>
                            <h3>Expertos en creación y manejo de publicidad  en linea especializados en odontología.</h3>
                        </div>
                        <a href="mailto:contacto@flivmedia.com" className='agendar'>AGENDAR LLAMADA</a>
                    </div>
    </section>
  )
}

export default Hero