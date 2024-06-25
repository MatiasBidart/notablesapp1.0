import './stylesheets/globalStyles.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { getInfo, postInfo } from '../store/slices/info.slice.jsx';
import LocalSelect from './LocalSelect.jsx'
import LocalView from './LocalView.jsx'


const Local = () => {
  const [setLocal, setSetLocal] = useState(null)
  const [setPedidoId, setSetPedidoId] = useState(null)
  const [setProductRegister, setSetProductRegister] = useState([])
  const [date, setDate] = useState(null);
  const dispatch = useDispatch();
  const handleDateFromInput = (value) => {
    setDate(value)
    console.log('📆', value)

  }
  const handleClick = async (item) => {
    setSetLocal(item.id)
    const dynamicURL = 'https://notables-backend.onrender.com/api/v1/pedido/';
    const data = {
        localId: item.id,
        startedAt: "horario",
        date: date

    }
    const developPedido = await axios.post(dynamicURL, data)
      .then(data => setSetPedidoId(data.data.id))
      .catch(err => console.log(err.message))
      .finally(console.log('🛹'))
   }
  

// 
  useEffect(() => {
    const dynamicURL = 'https://notables-backend.onrender.com/api/v1/products';
    dispatch(
      getInfo(dynamicURL)
      )
      .then()
      .catch(err => console.log(err.message))
  }, [setLocal])
  const productsList= useSelector(state => state.infoSlice);
  

  const handleIdFromInput = async(data) => {
    const register = {
      productId: data.productId,
      quantityAsked: data.productQuantity,
      pedidoId: setPedidoId,

    }
    console.log(register)
    const URL = 'https://notables-backend.onrender.com/api/v1/list';
    const postResponse = await axios.post(URL, register)
      .then(console.log('⛔', register))
      .catch(err => console.log(err.message))
    
    const dynamicURL = `https://notables-backend.onrender.com/api/v1/pedido/${setPedidoId}`;
    const getResponse = await axios.get(dynamicURL)
      .then(data => setSetProductRegister(data.data.lists))
      .catch(err => err.message)
      .finally(console.log('🚒', setProductRegister))
}



  return (
    <div className='frst-chld'>
      {
        setLocal ? <LocalView setProductRegister={setProductRegister} onClickFromInput={handleIdFromInput}/>
         : <LocalSelect onItemClick={handleClick} onDateChange={handleDateFromInput}/>
      }
    </div>
  )
}

export default Local