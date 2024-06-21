import './stylesheets/dashboard.css'
import React from 'react'
import GridCard from './GridCard'
import TDD from './TDD'


const Dashboard = ({data}) => {


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
      <div>
        <TDD>
          <h2>Hola desde el Dashborad</h2>
          <h5>hacia el modal</h5>
        </TDD>
      </div>
    </section>
    </div>
  )
}

export default Dashboard