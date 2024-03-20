// Importaciones 💥
import './stylesheets/deposito.css'
import './stylesheets/globalStyles.css'
// Funcionalidades 💯
import React from 'react'
// Componentes 💢
import LocalRender from './LocalRender.jsx'
import Pedido from './Pedido.jsx'
import { useAPI } from '../useAPI.js'


const Deposito = () => {
  const arrayLocals = [
    {id: 1, name:'El Federal', img:'https://www.losnotables.com.ar/wp-content/themes/notables-theme/archivos/img/bares/logos/bar-el-federal-footer.png'},
    {id: 2, name:'Margot', img:'https://www.losnotables.com.ar/wp-content/themes/notables-theme/archivos/img/bares/logos/cafe-margot-footer.png'},
    {id: 3, name:'CAO', img:'https://www.losnotables.com.ar/wp-content/themes/notables-theme/archivos/img/bares/logos/bar-de-cao-footer.png'},
    {id: 4, name:'Celta', img:'https://www.losnotables.com.ar/wp-content/themes/notables-theme/archivos/img/bares/logos/celta-bar-footer.png'},
    {id: 5, name:'Poesía', img:'https://www.losnotables.com.ar/wp-content/themes/notables-theme/archivos/img/bares/logos/cafe-la-poesia-footer.png'}
]
  const productData = useAPI('https://boilerplate1-1.onrender.com/api/v1/products')

  return (
    <div className="frst-chld">
        <div id='grd-deposito'className='grid'>
            <div className="flex align-cntr">
                {arrayLocals.map(item=>  <LocalRender key={item.id} url={item.img}/> )}
            </div>
          <div className='flex align-cntr'>
{/* Block 4 cambiar */}
            <div className="block4 flex align-cntr">
              <img src={arrayLocals[2].img} className='img-selected'/>
              <label>
                <select name="selectedFruit" className='local-slct'>
                  <option value="apple">Apple</option>
                  <option value="banana">Banana</option>
                  <option value="orange">Orange</option>
                </select>
              </label>
            </div>
            </div>
{/* Block 5 cambiar */}
          <div className='flex align-cntr'>
            <Pedido classes={'block5'}/>
          </div>
        </div>
    </div>
  )
}

export default Deposito