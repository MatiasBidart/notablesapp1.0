import './stylesheets/dashboard.css'
import React from 'react'
import GridCard from './GridCard'
import TDD from './TDD'
import { useSelector } from 'react-redux'


const Dashboard = ({data}) => {
  const modalState = useSelector(state=>state.modalState)


  return (
    <div className='main-dv'>
    <section id='grd-home' className='grid'>
      <div className='flex align-cntr'>
        <div className='frst-block flex align-cntr'>
          En esta sección se van a renderizar los productos a reponer del stock! 🦺
        </div>
      </div>
      <div className='grid grd-clmns-rspnsv'>
        <GridCard key={'card1'} data={data[0]}/>
        <GridCard key={'card2'} data={data[1]}/>
        <GridCard key={'card3'} data={data[2]}/>
      </div>
   
      {  modalState ?     
        <TDD>
          <h2><i>Bienvenido</i> al Sistema de Prueba</h2>
          <img className="welcome-icon" src="https://integrait.com.mx/wp-content/uploads/2024/03/iit-software-1-1.png" alt="welcome-icon" />
          <h4>Este sistema mínimo permite realizar algunas de las operaciones de gestión en producción.</h4>
          <h5>Esta versión acotada permite operar el sistema inicial sobre el que se construyó</h5>
        </TDD> 
        : null
        }

    </section>
    </div>
  )
}

export default Dashboard