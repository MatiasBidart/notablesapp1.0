import './stylesheets/tdd.css'
// import React, {useState} from 'react'
import React from 'react'
import { useDispatch} from 'react-redux'
import { setModalState } from '../store/slices/modalState';

const TestDrivenDevelopment = ({children}) => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(setModalState(false))
  }

  return (
    <>

    <div id='modal-frst-chld' className='overlay overlying-z'>
      <div className='contenedor-modal'>
        <div className='encabezado-modal'>
          <h3>Encabezado Modal</h3>
        </div>
        <div className='boton-modal' onClick={()=> closeModal()}>X</div>
        {children}
      </div>
    </div>

    </>
  )
}

export default TestDrivenDevelopment