import './stylesheets/localRender.css'
import './stylesheets/globalStyles.css'
import React from 'react'

const LocalRender = ({item, onClick}) => {
  const handleClick = () => {
    onClick(item); // Llamo a la función onClick pasando el id como argumento
  };
  return (
    <div onClick={handleClick} className='img-cntnr flex align-cntr'>
        <img alt='image' src={item.img} className='local-img-wdth'/>
    </div>
  )
}

export default LocalRender