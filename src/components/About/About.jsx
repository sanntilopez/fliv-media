import React from 'react'
import "./About.css"

const About = () => {
  return (
    <section className="about container section" id='nosotros'>
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6">
        <h3 className='section__subtitle'>Nosotros</h3>
      <h2 className='section__title'>¿QUIENES SOMOS?</h2>
      <p className='fs-5'>Nuestra primera publicidad en linea tuvo cero ventas. Es por eso que para llegar a donde estamos hoy, tuvimos que pasar por un largo camino en el logramos perfeccionar nuestra metodología. Nuestro objetivo es que no te suceda a ti lo mismo, es por eso que ofrecemos nuestros servicios.</p>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <div className='d-flex flex-column gap-3'>
            <img src="/img/cofounder.jpeg" alt="co-founder" width={400}/>
            <span><b>Co-founder, Villalba Martin</b></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About