import './stylesheets/tdd.css'
// import React, {useState} from 'react'
import React from 'react'
import { useDispatch} from 'react-redux'
import { setModalState } from '../store/slices/modalState';

const TestDrivenDevelopment = ({children}) => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(setModalState(false))
    console.log('tellme')
  }
  // const [modal, setModal] = useState(true)
  return (
    <>
    {/* {modal ?  */}
    <div className='overlay overlying-z'>
      <div className='contenedor-modal'>
        <div className='encabezado-modal'>
          <h3>Encabezado Modal</h3>
        </div>
        <div className='boton-modal' onClick={()=> closeModal()}>X</div>
        {children}
      </div>
    </div>
    {/* : null} */}
    </>
  )
}

export default TestDrivenDevelopment