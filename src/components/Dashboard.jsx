import React from 'react'
import GridCard from './GridCard'
import './stylesheets/dashboard.css'


const Dashboard = ({data}) => {

  return (
    <div className='main-dv'>
    <section id='grd-home' className='grid'>
      <div className='flex align-cntr'>
        <div className='frst-block flex align-cntr'>
          HOLA MUNDO!
        </div>
      </div>
      <div className='grid grd-clmns-rspnsv'>
        <GridCard key={'card1'} data={data[0]}/>
        <GridCard key={'card2'} data={data[1]}/>
        <GridCard key={'card3'} data={data[2]}/>
      </div>
      <div className='block'></div>
    </section>
    </div>
  )
}

export default Dashboard