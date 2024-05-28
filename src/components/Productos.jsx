import './stylesheets/globalStyles.css'
import './stylesheets/productos.css'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLoadingGlobal } from "../store/slices/isLoading";
import axios from 'axios'
import RegistroList from './RegistroList';
import Container from './Container'
import SetProduct from './SetProduct';

const Productos = () => {
const [productList,setProductList] = useState(null)
const dispatch = useDispatch()
const loaderSpinner = useSelector(state=>state.isLoading)
useEffect(() => {
  if(!productList) {
    dispatch(setIsLoadingGlobal(true))
    const URL = 'https://notables-backend.onrender.com/api/v1/products'
    axios.get(URL)
    .then(data => setProductList(data.data))
    .catch(err=> console.log(err.message))
    .finally(()=> dispatch(setIsLoadingGlobal(false)))
  }
}, [])
const handleCategoryId = (id)=> {
  dispatch(setIsLoadingGlobal(true))
  const dynamicURL = `https://notables-backend.onrender.com/api/v1/products/category/${id}` 
  axios.get(dynamicURL)
  .then(data => setProductList(data.data))
  .catch(err => console.log(err.message))
  .finally(dispatch(setIsLoadingGlobal(false)))
}


  return (
    <div className='frst-chld grid grd-prdcts'>
        <section className='flex align-cntr'>
          <SetProduct/>
        </section>
        <section className='flex align-cntr'>
        <div className='flex align-cntr'>
        { loaderSpinner ? 
          <img className='loader' src='https://www.wpfaster.org/wp-content/uploads/2013/06/circle-loading-gif.gif'/>
           : <Container handleCategoryId={handleCategoryId}>
            {
              productList ? productList.map(item => <RegistroList key={item.id} data={{name: item.name, img: item.img, firstValue: item.stock, endpoint: `https://notables-backend.onrender.com/api/v1/products/${item.id}`}}/>) : null 
            }
           </Container>
            }
        </div>
        </section>
    </div>
  )
}

export default Productos