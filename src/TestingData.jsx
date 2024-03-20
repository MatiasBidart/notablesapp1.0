import React, { useState, useEffect } from 'react'
// import { useAPI, postAPI } from './useAPI'
import localData from './jsonDataLocal'
import AcquireDataFromFatherTest from './AcquireDataFromFatherTest.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { postInfo, getInfo } from './store/slices/info.slice.jsx';

const TestingData = () => {
  const [localRender, setLocalRender] = useState(localData[0])
  // -----------------------------------------------------------------------------------------------------
  const array = {
    localId: localRender.id,
    date: '2024-03-19'
  }
  // const [responseData,setResponseData] = useState()
  const dispatch = useDispatch();
  useEffect(() => {
    const dynamicURL = 'https://notables-backend.onrender.com/api/v1/pedido/local';
    dispatch(postInfo(dynamicURL, array))
  }, [])
   // 🎎 Usa useSelector para acceder al estado
  const pedido= useSelector(state => state.infoSlice); // Selector para acceder a los productos almacenados en el estado

  const pedidoId = pedido.id;


// Prueba china 🎎🎎🎎
useEffect(() => {
    if (pedidoId) {
      const dynamicURL = 'https://notables-backend.onrender.com/api/v1/pedido/' + pedidoId
     dispatch(getInfo(dynamicURL))
    } else {
      console.log('🎇')
    }
}, [pedidoId])

const promontorio= useSelector(state => state.infoSlice);
console.log(promontorio)








const handleClick = ()=> {
  console.log('usando el click')
  setLocalRender(localData[1])
}


  return (
    <div>
        <ul className='block2'>TestingData:</ul>
        <li  className='block crsr-ppintr' onClick={handleClick}>{ 'his' }</li>
        <li><AcquireDataFromFatherTest respuesta={'hola este es el id:'}/> </li>
    </div>
  )
}

export default TestingData