// Importaciones 💥
import './App.css'
import data from './jsonDataGridCards.js';
import React, {useEffect} from 'react';
// Funcionalidades 💯
import { Routes, Route} from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setIsLoadingGlobal } from "./store/slices/isLoading.jsx"
// Componentes 💢
import Dashboard from './components/Dashboard.jsx'
import Deposito from './components/Deposito.jsx';
import Productos from './components/Productos.jsx';
import Local from './components/Local.jsx';



function App() {
  const loaderSpinner = useSelector(state=>state.isLoading)
  const dispatch = useDispatch()
  const handleClick = ()=> {
    console.log('algo pasa')
    dispatch(setIsLoadingGlobal(!loaderSpinner));
    // console.log(loaderSpinner + 'Otra vez mi boca insensata')
  }
 
  useEffect(() => {
    // console.log(loaderSpinner + 'vuelve a caer')
  }, [handleClick])
  


  return (
    <div className='App'>
      <header>
        <nav className='flex drctn-rw align-strt-cntr'>
          <a href='#' className='flex a-main-logo'>
            <img src='https://www.losnotables.com.ar/wp-content/themes/notables-theme/archivos/img/logo-los-notables.png' className='main-logo'/>
          </a>
          <label htmlFor= 'brgr-menu' className='checkbtn'>
          <div className='crsr-pointr flex align-end'>          
              <svg xmlns="http://www.w3.org/2000/svg" id='brgr-icon' fill="currentColor" viewBox="0 0 16 16">
                <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"/>
               </svg>
             </div>
          </label>
          <input type='checkbox' id='brgr-menu'/>
          <ul className='flex drctn-rw align-strt-cntr items'>
            <li>
              <a href='#'>{loaderSpinner ? <img className='loader' src='https://www.wpfaster.org/wp-content/uploads/2013/06/circle-loading-gif.gif'/>: 'Home'}</a>
            </li>
            <li>
              <a href='#'>
                Bar
              </a>
            </li>
            <li>
              <a href='#'>Lis</a>
            </li>
            <li>
              <a href='#'>Marg</a>
            </li>
            <li>
              <a href='#'>Maggi</a>
              <button onClick={()=> handleClick()}>Vutton</button>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Dashboard data={data}/>}/>
        <Route path='/deposito' element={<Deposito/>}/>
        <Route path='/productos' element={<Productos/>}/>
        <Route path='/local' element={<Local/>}/>
      </Routes>
    </div>
  )
}

export default App
