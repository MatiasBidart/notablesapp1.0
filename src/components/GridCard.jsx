import React from 'react';
import { NavLink } from 'react-router-dom';
import './stylesheets/gridCard.css'; // Asegúrate de importar el archivo CSS específico para GridCard

const GridCard = ({ data }) => {
  return (
    <NavLink to={data.link}>
    <div id='grid' className="grid grd-crd grd-no-gap">
      <div className='card'>
          <section className='flex align-cntr sctn-icon img-container'>
            <div className='gradient-overlay'></div>
            <img className='grd-crd-image' src={data.img} alt={data.title} onError={(e) => { e.target.style.display = 'none' }}/>
          </section>
        <div className="icon-overlay">
          <img src={data.icon} alt={data.title} onError={(e) => { e.target.style.display = 'none' }}/>
        </div>
        <div className='flex align-cntr'>
          <h4>{data.title}</h4>
        </div>
      </div>
    </div>
        </NavLink>
  );
};

export default GridCard;
