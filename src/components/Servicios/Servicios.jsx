import React from 'react'
import "./Servicios.css"

const Servicios = () => {
  return (
    <section className='section mb-5' id='servicios'>

      <h2 className='section__title text-center mb-5'>Nuestros servicios</h2>
      <div className="servicios__box container mt-5">
        <div className='row d-flex justify-content-center gap-4'>
          <div className="col-md-3 d-flex flex-column justify-content-between align-items-center gap-4">
            <h3>Campañas Facebook Ads</h3>
            <img src="/img/facebookads.png" alt="facebook ads" />
            <p>Ayudamos a que su negocio aumente sus ventas a través de anuncios en Facebook Ads.</p>
          </div>
          <div className="col-md-3 d-flex flex-column justify-content-between align-items-center gap-4">
            <h3>Investigación de palabras clave</h3>
            <img src="/img/keyword.png" alt="palabras clave" />
            <p>Elección de +30 palabras clave.</p>
          </div>
          <div className="col-md-3 d-flex flex-column justify-content-between align-items-center gap-4">
            <h3>Extensiones y audiencias</h3>
            <img src="/img/audiencia.png" alt="audiencia" />
            <p>Ayudamos a que su negocio aumente sus ventas a través de extensiones y audiencias.</p>
          </div>
          <div className="col-md-3 d-flex flex-column justify-content-between align-items-center gap-4">
            <h3>Recomendaciones sobre tipos de anuncio</h3>
            <img src="/img/anuncios.png" alt="anuncios" />
            <p>Ayudamos a que su negocio aumente sus ventas a través de recomendaciones de anuncios.</p>
          </div>
          <div className="col-md-3 d-flex flex-column justify-content-between align-items-center gap-4">
            <h3>Sugerencias de oferta</h3>
            <img src="/img/oferta.jpg" alt="ofertas" />
            <p>Te sugerimos ofertas que aumentaran las ventas de su negocio.</p>
          </div>
          <div className="col-md-3 d-flex flex-column justify-content-between align-items-center gap-4">
            <h3>Creacion de contenido</h3>
            <img src="/img/web.jpg" alt="contenido" />
            <p>Creamos contenido para su negocio, aumentando el alcance del mismo.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Servicios