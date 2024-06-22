import './stylesheets/globalStyles.css'
import './stylesheets/productos.css'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLoadingGlobal } from "../store/slices/isLoading";
import axios from 'axios'
import Container from './Container'
import RegistroList from './RegistroList';

// 👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️
import TDD from './TDD';
import { setModalState } from '../store/slices/modalState';
// 👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️

const LocalView = ({ setProductRegister, onClickFromInput }) => {
const [productList,setProductList] = useState(null)
const [productName, setProductName] = useState(null)
// 👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️
const dispatch = useDispatch();

const [product, setProduct] = useState(null)
const setModalFunction = (filteredProduct) => {
  dispatch(setModalState(true))
  setProduct(filteredProduct);
}
const handleClick = (product) => {
  onClickFromInput(product);
  dispatch(setModalState(false));

}
// 👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️👷🏽‍♂️
const modalState = useSelector(state=>state.modalState)
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
    <div className='frst-chld'>


 {       
  modalState ?<TDD>
          <h2>{product.name}</h2>
          <img className='img-selected-input' src={product.img}/>
          <h5>Stock: {product.stock}</h5>
          <button onClick={()=> handleClick(product)}> Enviar </button>
        </TDD>
        : null
  }


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
            <div className='flex align-cntr filter-dv crsr-pointr' key={filteredProduct.id}>
                {/* Renderizar detalles del producto */}
                <img className='img-selected-input' src={filteredProduct.img}/>
                <h5>{filteredProduct.name}</h5>
                <div className='flex align-cntr crsr-pointr button-add' onClick={()=> {setModalFunction(filteredProduct)}}>+</div>
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