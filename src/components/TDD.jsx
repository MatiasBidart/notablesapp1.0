import './stylesheets/tdd.css'
import React from 'react'

const TestDrivenDevelopment = ({children}) => {
  return (
    <>
    <div className='overlay'>
      <div className='contenedor-modal'>
        <div className='encabezado-modal'>
          <h3>Encabezado Modal</h3>
        </div>
        <div className='boton-modal'>X</div>
        {children}
      </div>
    </div>
    </>
  )
}

export default TestDrivenDevelopment