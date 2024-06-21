import './stylesheets/globalStyles.css'
import './stylesheets/productos.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Formu from './Form'

const SetProduct = () => {
    const [productName, setProductName] = useState();
    const [productStock, setProductStock] = useState();
    const [productImg, setProductImg] = useState();

    const handleImageUrl = (url) => {
        setProductImg(url);
    };

 
    const handleClick= () => {
    //   if(productName && productStock && productImg) {
    //     const productData = {
    //         name: productName,
    //         stock: productStock,
    //         img: productImg
    //     }
    //     console.log(productData)
    //     console.log('está ocurriendo el click con data')
    // } 
  // a manera de solucionar el bug, voy a intentar sin imagen

        
      // hasta acá es la corrección del bug

        if (productName && productStock) {
            const productData = {
                name: productName,
                stock: productStock,
                img: "https://fotos.perfil.com/2022/08/16/trim/900/900/las-profecias-de-baba-vanga-la-nostradamus-de-los-balcanes-20220816-1403382.jpg"
            }
          const dynamicURL = `https://notables-backend.onrender.com/api/v1/products/` 
          axios.post(dynamicURL, productData)
          .then(data => console.log('😂:', data.data))
          .catch(err => console.log(err.message))
          .finally(console.log('😍:', productData))
        }
        
      console.log('occurrió la operación')
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