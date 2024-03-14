import './stylesheets/gridCard.css'
import './stylesheets/globalStyles.css'
import React from 'react'
import { NavLink } from 'react-router-dom';


const GridCard = ({data}) => {

  return (
    <div className="grid grd-crd grd-no-gap">
        <div>
        <NavLink to={data.link}>
          <section className='flex align-cntr sctn-icon'>
            <img className='grd-crd-icon' src={data.img}/>
          </section>
        </NavLink>
        </div>
        <div>
          <h5>{data.title}</h5>
        </div>
    </div>
  )
}

export default GridCard