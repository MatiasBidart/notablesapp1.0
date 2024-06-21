import './stylesheets/localRender.css'
import './stylesheets/globalStyles.css'
import './stylesheets/localSelect.css'
import './stylesheets/login.css'
import React from 'react'
import localData from '../jsonDataLocal.js'
import LocalRender from './LocalRender.jsx'


const LocalSelect = ({onItemClick}) => {


  return (
    <div className='frst-chld'>
      <section>
        <div className='login'>
          Hola mondo!
        </div>
      </section>
      <div className='flex align-cntr drctn-clmn'>
          <h4>Elegir fecha de pedido 📆</h4>
          <input type='date' min='2024-03-19' className='input-date'/>
      </div>
      <h4>Ejecutar método de Prueba 🔽</h4>
         <div className="flex align-cntr">
                {localData.map(item=>  <LocalRender key={item.id} item={item} onClick={onItemClick}/> )}
          </div>
    </div>
  )
}

export default LocalSelect