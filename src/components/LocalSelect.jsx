import './stylesheets/localRender.css'
import './stylesheets/globalStyles.css'
import './stylesheets/localSelect.css'
import './stylesheets/login.css'
import React from 'react'
import localData from '../jsonDataLocal.js'
import LocalRender from './LocalRender.jsx'
import { useDispatch, useSelector } from 'react-redux'
import TDD from './TDD';
import { setModalState } from '../store/slices/modalState';
import { useRef } from 'react'

const LocalSelect = ({onItemClick, onDateChange}) => {
  const sliderRef = useRef(null);

   const handleScroll = (direction) => {
     if (sliderRef.current) {
       const scrollAmount = sliderRef.current.clientWidth;
       sliderRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
     }
   };

  const dispatch = useDispatch();
  const modalState = useSelector(state=>state.modalState)
  const handleClick = () => {
    dispatch(setModalState(true))
  }

  return (
    <div className='frst-chld'>
      <div>
      {       
  modalState ?<TDD>
          <h2>⛔🕵🏽‍♀️ Acceso Bloqueado</h2>
          <h3> Estas probando una versión demo, el acceso al dashboard de <i>Locales</i> se encuentra restringido</h3>
          <h4> Para probar la versión demo escoger fecha y local de pruebas abajo </h4>
        </TDD>
        : null
  }
      </div>
      <section>
        <div id='login' className='login flex align-cntr drctn-clmn'>
        <img className='login-img' src='https://marketing-v2-drupal-prod-assets.fooda.com/Popup%20Setup%20copy%202-2x.png'/>
        <h2>Iniciar Sesión</h2>
        <form>
        <input onClick={()=> handleClick()} type="text" class="custom-input" placeholder="Código de acceso..."/>
        </form>
        </div>

      </section>
      <div className='flex align-cntr drctn-clmn'>
          <h4>Elegir fecha de pedido 📆</h4>
          <input 
          type='date' 
          min='2024-03-19' 
          className='input-date'
          onChange={(e) => onDateChange(e.target.value)}
          />
      </div>

    <h4>Ejecutar método de Prueba 🔽</h4>
      <div className="slider-container">
        <button className="scroll-button left" onClick={() => handleScroll('left')}>‹</button>
        <div className="slider" ref={sliderRef}>
        <div className="flex align-cntr">
                {localData.map(item=>  <LocalRender key={item.id} item={item} onClick={onItemClick}/> )}
          </div>
        </div>
        <button className="scroll-button right" onClick={() => handleScroll('right')}>›</button>
      </div>
    </div>
  )
}

export default LocalSelect