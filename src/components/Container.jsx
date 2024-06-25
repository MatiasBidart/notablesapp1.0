import './stylesheets/globalStyles.css'
import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Container = ({children, handleCategoryId}) => {
const data = [{id:1, name:"filter-icon", img: 'https://cdn-icons-png.flaticon.com/128/7420/7420944.png'}]
const [categoryList, setCategoryList] = useState()
const [selectedCategory, setSelectedCategory] = useState(null)
const [filterCall, setFilterCall] = useState('dsply-nn')
// ----------------------------
const handleClick = ()=> {
  if (filterCall) {
    setFilterCall(null)
    setSelectedCategory(null)
  } else {
    setFilterCall('dsply-nn')
  }
}
useEffect(() => {
    const URL= 'https://notables-backend.onrender.com/api/v1/categories';
    axios.get(URL)
    .then(data => setCategoryList(data.data))
    .catch(err => console.log(err.message))
}, [])
// ...............................................................................

const selectCategory = (category) => {
  if (category === selectedCategory) {
    setSelectedCategory(null);
  } else {
    setSelectedCategory(category);
    handleCategoryId(category.id);
  }
};

  return (
    <div className='block5'>
        <div className='block6'>Listado 💻</div>
        <div className='flex flx-end mrgn-2rem crsr-pointr fltr-dv ' onClick={()=> handleClick()}>
          <img alt='filter' src={data[0].img} className='fltr-icon'/>
        </div>
        <div className={"block10 flex flx-start " + filterCall}>
          { categoryList ? categoryList.map(item => <div key={item.id} className={`flex align-cntr ctgry ${item === selectedCategory ? 'slctd' : ''}`} onClick={()=> selectCategory(item)}>{item.name}</div>) : null }
        </div>
        {children}
    </div>
  )
}

export default Container