import './stylesheets/globalStyles.css'
import './stylesheets/registerList.css'
import React, { useState } from 'react';


const RegistroList = ({data}) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  
  return (
    <div className='grid grid-dual grd-no-gap block7'>
        <div className='flex flx-start'>
          <img src={data.img} className='rgstr-lst-img'/>
          <h4 className='flex align-cntr'>{data.name}</h4>
        </div>
        <div className='flex flx-end'>
          <div className='block6 flex align-cntr'>{data.firstValue}</div>
          <form onSubmit={handleSubmit} className='grid grid-dual grd-no-gap jstfy-itms-cntr'>
            <input type="text" value={value} onChange={handleChange} className='block8 flex align-cntr jstfy-itms-cntr'/>
            <button type="submit" className='dlvr-bttn-pddng flex align-cntr crsr-pointr'><h4 className='wht-text'>✔ Completed</h4></button>
          </form>
        </div>
    </div>
  )
}

export default RegistroList