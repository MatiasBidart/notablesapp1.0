import React, { useState } from 'react'
import { uploadFile } from '../firebase.config/config'
import './stylesheets/globalStyles.css'

const Formu = ({ handleImageUrl }) => {
  const [imgURL, setImgURL] = useState(null)
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const downloadURL = await uploadFile(file);
    downloadURL ? setImgURL(downloadURL) : null
    handleImageUrl(downloadURL);
  };
  

  const handleClick = () => {
    document.getElementById('actualFileInput').click();
  };

  return (
    <div className='block11' onClick={handleClick}>
      {imgURL ? <img alt='imagen' src={imgURL} className='imagenproof'/> : null}
      <input type='file' name='' id='actualFileInput' className='dsply-nn' onChange={handleFileChange} />
    </div>
  )
}

export default Formu