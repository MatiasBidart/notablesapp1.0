// Importaciones 💥
import './stylesheets/deposito.css'
import './stylesheets/globalStyles.css'
// Funcionalidades 💯
import React, { useState, useEffect, Children } from 'react'
import localData from '../jsonDataLocal.js'
import { useDispatch, useSelector } from 'react-redux'
import { postInfo } from '../store/slices/info.slice.jsx';
import axios from 'axios'

// Componentes 💢
import LocalRender from './LocalRender.jsx'
import Container from './Container.jsx'
// import TDD from './TDD'
import RegistroList from './RegistroList.jsx'
import { setIsLoadingGlobal } from '../store/slices/isLoading.jsx'


const Deposito = () => {
const [localRender, setLocalRender] = useState(localData[0])
const [pedidoRender, setPedidoRender] = useState(null)
const [date, setDate] = useState('2024-06-21')
const loaderSpinner = useSelector(state=>state.isLoading)
const handleClick = (item) => {
  setLocalRender(item)
};
const handleSelect = (selectedValue) => {
  const selectedItem = JSON.parse(selectedValue);
  handleClick(selectedItem);
};

const dispatch = useDispatch();
  useEffect(() => {
    const dynamicURL = 'https://notables-backend.onrender.com/api/v1/pedido/local';
    dispatch(
      postInfo
      (
        dynamicURL, 
        {localId: localRender.id, date: date}
      )
      )
      .then(console.log('🎎 EJECUT!', date, localRender.id, localRender.name))
      .catch(err => console.log(err.message))
  }, [localRender, date])
  
const pedido= useSelector(state => state.infoSlice);
console.log(pedido)
const pedidoId = pedido ? pedido.id : null;
useEffect(() => {
  if (pedidoId) {
    const dynamicURL = `https://notables-backend.onrender.com/api/v1/pedido/${pedidoId}` 
    axios.get(dynamicURL)
    .then(data => setPedidoRender(data.data))
    .catch(err => console.log(err.message))
  } else {
    console.log('Error: no hay data; reintentar 🧉')
    setPedidoRender(null)
  }
}, [pedidoId])

const handleCategoryId = (id)=> {
  dispatch(setIsLoadingGlobal(true))
  if(pedidoId) {
    const dynamicURL = `https://notables-backend.onrender.com/api/v1/pedido/${pedidoId}/category/${id}` 
    axios.get(dynamicURL)
    .then(data => setPedidoRender(data.data))
    .catch(err => console.log(err.message))
    .finally(dispatch(setIsLoadingGlobal(false)))
  } else {
    setPedidoRender(null)
    dispatch(setIsLoadingGlobal(false))
  }
}



  return (
    <div className="frst-chld">
        <div id='grd-deposito'className='grid'>
            <div className="flex align-cntr">
                {localData.map(item=>  <LocalRender key={item.id} item={item} onClick={handleClick}/> )}
            </div>
          <div className='flex align-cntr'>
            <div className="block4 pddng-3rem flex align-cntr">
              <img src={localRender.img} className='img-selected'/>
              <label>
                <select name="selectedLocal" className='local-slct' value={localRender} onChange={(event) => handleSelect(event.target.value)}>
                  <option value="default">Seleccionar...</option>
                  {localData.map(item=> <option key={item.id} value={JSON.stringify(item)}>{item.name}</option>  )}
                </select>
              </label>
              <input type='date' min='2024-03-19' className='input-date' onChange={(event) => setDate(event.target.value)}/>
            </div>
            </div>
          {/* <TDD> */}
          <div className='flex align-cntr block9'>
          { loaderSpinner ? 
          <img className='loader' src='https://www.wpfaster.org/wp-content/uploads/2013/06/circle-loading-gif.gif'/>
           : <Container handleCategoryId={handleCategoryId}>
            {
              pedidoRender ? pedidoRender.lists.map(item => <RegistroList key={item.product.id} data={{name: item.product.name, img: item.product.img, firstValue: item.quantityAsked, endpoint: `https://notables-backend.onrender.com/api/v1/pedido/${pedidoId}`}}/> ) : null 
            }
           </Container>
            }
          </div>
        {/* </TDD> */}
        </div>
    </div>
  )
}

export default Deposito