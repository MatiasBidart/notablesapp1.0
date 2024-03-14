import './stylesheets/localRender.css'
import './stylesheets/globalStyles.css'
import React from 'react'

const LocalRender = ({url}) => {
  // El checkbox no funcionó, es complicado porque son componentes. Capaz pasar un dato como parámetro,
  // lo cual disminuye su escalabilidad
  return (
    <div className='img-cntnr flex align-cntr'>
        <img href='image' src={url} className='local-img-wdth'/>
    </div>
  )
}

export default LocalRender