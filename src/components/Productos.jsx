import './stylesheets/globalStyles.css'
import './stylesheets/productos.css'
import React from 'react'
import Pedido from './Pedido'

const Productos = () => {
  return (
    <div className='frst-chld grid grd-prdcts'>
        <section className='flex align-cntr'>
        <div className="block4 flex align-cntr mrgn-1rem-prdcts"> Yeh </div>
        </section>
        <section className='flex align-cntr'>
        <div className='flex align-cntr'>
            <Pedido classes={'block5'}/>
        </div>
        </section>
    </div>
  )
}

export default Productos