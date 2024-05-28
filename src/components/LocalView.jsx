import './stylesheets/globalStyles.css'
import './stylesheets/productos.css'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLoadingGlobal } from "../store/slices/isLoading";
import axios from 'axios'
import Container from './Container'
import RegistroList from './RegistroList';

const LocalView = ({ setProductRegister, onClickFromInput }) => {
const [productList,setProductList] = useState(null)
const [productName, setProductName] = useState(null)
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
console.log('🎈', setProductRegister)



  return (
    <div className='frst-chld'>
      <div className='input-container margin-cntnr'>
      <input
      type="text"
      className="custom-input"
      placeholder="Nombre de producto..."
      onChange={e => setProductName(e.target.value)}
      />
      <div className='flex align-cntr drctn-clmn'>
      {productName && productList ? 
      productList
        .filter(product => product.name.toLowerCase().includes(productName.toLowerCase()))
        .map(filteredProduct => (
            // Aquí renderizas los elementos filtrados
            <div className='flex align-cntr filter-dv crsr-pointr' key={filteredProduct.id} onClick={()=> onClickFromInput(filteredProduct)}>
                {/* Renderizar detalles del producto */}
                <img className='img-selected-input' src={filteredProduct.img}/>
                <h5>{filteredProduct.name}</h5>
                <div className='flex align-cntr crsr-pointr button-add' onClick={()=> onClickFromInput(filteredProduct)}>+</div>
                {/* Otros detalles del producto */}
            </div>
        )) 
    : "Busca el producto por su nombre..."}
      </div>
      </div>
      <section className='flex align-cntr'>
        <div className='flex align-cntr'>
        { loaderSpinner ? 
          <img className='loader' src='https://www.wpfaster.org/wp-content/uploads/2013/06/circle-loading-gif.gif'/>
           : <Container handleCategoryId={handleCategoryId}>
            {
              setProductRegister ? setProductRegister.map(item => <RegistroList key={item.id} data={{name: item.name, img: item.img, firstValue: item.stock, endpoint: `https://notables-backend.onrender.com/api/v1/products/${item.id}`}}/>) : null 
            }
           </Container>
            }
        </div>
        </section>
    </div>
  )
}

export default LocalView