import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { setIsLoadingGlobal } from "./isLoading"; // solucionar errores de incompatibilidad cuando se llame a isLoading.slice.jsx 

export const infoSlice = createSlice({
    name:'infoSlice',
    initialState: [], // 🎎 El estado inicial es una matriz vacía
    reducers:{
       setInfo: (state, action) => action.payload 
       // 🎎 La acción `setInfo` actualiza el estado con los datos proporcionados
    }
}
)
export const { setInfo } = infoSlice.actions // 🎎 Exporta las acciones creadas por el slice


export const getInfo = (URL) => (dispatch) => {
    dispatch(setIsLoadingGlobal(true)) // 🎎 Establece isLoadingGlobal en true antes de realizar la solicitud
    return axios.get(URL)
    .then(({data}) =>dispatch(setInfo(data))) // 🎎 Actualiza el estado con los datos recibidos por la petición.
    .catch(err => console.log(err))
    .finally(()=> dispatch(setIsLoadingGlobal(false))) // 🎎 Establece isLoadingGlobal en false después de la solicitud
}

export const postInfo = (URL, data) => (dispatch) => {
    dispatch(setIsLoadingGlobal(true)) // 🎎 Establece isLoadingGlobal en true antes de realizar la solicitud
    return axios.post(URL, data)
    .then(({data}) =>dispatch(setInfo(data))) // 🎎 Actualiza el estado con los datos recibidos por la petición.
    .catch(err => console.log(err))
    .finally(()=> dispatch(setIsLoadingGlobal(false))) // 🎎 Establece isLoadingGlobal en false después de la solicitud
}

export default infoSlice.reducer;
// 🎎 Exporta el reducer generado por createSlice, que manejará las acciones del slice