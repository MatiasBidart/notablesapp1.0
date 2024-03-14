import './stylesheets/globalStyles.css'
import './stylesheets/registerList.css'
import React from 'react'

const RegistroList = ({data}) => {
  return (
    <div className='grid grid-dual grd-no-gap block7'>
        <div className='flex flx-start'>
          <img src={data.img} className='rgstr-lst-img'/>
          <h4 className='flex align-cntr'>{data.name}</h4>
        </div>
        <div className='flex flx-end'>
          <div className='block6 flex align-cntr'>{data.quantityAsked}</div>
          <div className='block5 flex align-cntr'>{data.quantityDelivered}</div>
          <div className='dlvr-bttn-pddng flex align-cntr crsr-pointr'><h4 className='wht-text'>✔ Completed</h4></div>
        </div>
    </div>
  )
}

export default RegistroList