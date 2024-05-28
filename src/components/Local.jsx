import './stylesheets/globalStyles.css'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInfo, postInfo } from '../store/slices/info.slice.jsx';
import LocalSelect from './LocalSelect.jsx'
import LocalView from './LocalView.jsx'


const Local = () => {
  const [setLocal, setSetLocal] = useState(null)
  const [setPedidoId, setSetPedidoId] = useState(null)
  const [setProductRegister, setSetProductRegister] = useState([])
  const dispatch = useDispatch();
  const handleClick = (item) => {
    setSetLocal(item.id)
    const dynamicURL = 'https://notables-backend.onrender.com/api/v1/pedido';
    const data = {
        localId: item.id,
        startedAt: "horario"
    }
    dispatch(
      postInfo(dynamicURL, data)
      )
      .then(data => setSetPedidoId(data.payload.id))
      .catch(err => console.log(err.message))
  }
  const handleIdFromInput = (item) => {
    console.log('🎁', item);
    setSetProductRegister((prevItems) => [...prevItems, item]);
}
  useEffect(() => {
    const dynamicURL = 'https://notables-backend.onrender.com/api/v1/products';
    dispatch(
      getInfo(dynamicURL)
      )
      .then()
      .catch(err => console.log(err.message))
  }, [setLocal])
  const productsList= useSelector(state => state.infoSlice); 



  return (
    <div className='frst-chld'>
      {
        setLocal ? <LocalView setProductRegister={setProductRegister} onClickFromInput={handleIdFromInput}/> : <LocalSelect onItemClick={handleClick}/>
      }
    </div>
  )
}

export default Local