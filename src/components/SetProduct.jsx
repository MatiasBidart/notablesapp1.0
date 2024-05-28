import './stylesheets/globalStyles.css'
import './stylesheets/productos.css'
import React, { useState } from 'react'
import Formu from './Form'

const SetProduct = () => {
    const [productName, setProductName] = useState();
    const [productStock, setProductStock] = useState();
    const [productImg, setProductImg] = useState();

    const handleImageUrl = (url) => {
        setProductImg(url);
    };

 
    const handleClick= () => {
      if(productName && productStock && productImg) {
        const productData = {
            name: productName,
            stock: productStock,
            img: productImg
        }
        console.log(productData)
        console.log('está ocurriendo el click con data')
    } 

      console.log('está ocurriendo el click cuando quiero')
    }

  return (
    <div className="block4 flex align-cntr mrgn-1rem-prdcts"> 
    <Formu handleImageUrl={handleImageUrl}/>
    <div className="input-container">
      <input
      type="text"
      className="custom-input"
      placeholder="Nombre de producto..."
      onChange={e => setProductName(e.target.value)}
      />
      <input
      type="text"
      className="custom-input"
      placeholder="Stock de producto..."
      onChange={e => setProductStock(e.target.value)}
      />
      <input
      type="text"
      className="custom-input"
      placeholder="Categoría de producto..."
      onChange={e => console.log(e.target.value)}
      />
    </div>
    <div className='flex align-cntr crsr-pointr block12' onClick={()=> handleClick()}>Button</div>
  </div>
  )
}

export default SetProduct