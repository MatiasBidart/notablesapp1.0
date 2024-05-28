import './stylesheets/localRender.css'
import './stylesheets/globalStyles.css'
import './stylesheets/localSelect.css'
import React from 'react'
import localData from '../jsonDataLocal.js'
import LocalRender from './LocalRender.jsx'


const LocalSelect = ({onItemClick}) => {

  return (
    <div>
         <div className="flex align-cntr">
                {localData.map(item=>  <LocalRender key={item.id} item={item} onClick={onItemClick}/> )}
          </div>
          <div className='flex align-cntr'>
          <input type='date' min='2024-03-19' className='input-date'/>
          </div>
    </div>
  )
}

export default LocalSelect