import React from 'react'
import RegistroList from './RegistroList'
import axios from 'axios'

const Pedido = ({classes}) => {
  const data = [{id:1, name:'Azucar x25kg', quantityAsked: '30', quantityDelivered:'25', img:'https://www.mayoristanet.com/media/catalog/product/cache/7c7e7e8fca0426f106cb3e3371a80f9c/A/0/A03197_9.jpg'},
  {id:2, name:'Pack Leche x12', quantityAsked: '2', quantityDelivered:'2', img:'https://shoppingdelpanadero.com/wp-content/uploads/2021/05/2126.jpg'},
  {id:3, name:'Panceta Ahumada', quantityAsked: '3', quantityDelivered:'', img:'https://autoservicioelisa.com.ar/wp-content/uploads/2021/02/ELISA-86.jpg'}
]
// ----------------------------
axios.get('https://boilerplate1-1.onrender.com/api/v1/pedido')
    .then(response => console.log(response.data))
    .catch(err => console.log(err.message))

  console.log(new Date())
  return (
    <div className={classes}>
        <div className='block6'>Hola! soy el Pedido</div>
        {
          data.map(item => <RegistroList key={item.id} data={item}/>)
        }
    </div>
  )
}

export default Pedido