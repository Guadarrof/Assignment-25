import React from 'react'
import { useState } from 'react'
import InputGroup from './InputGroup';

const ClimaCiudad = () => {
    const [temp, setTemp]=useState(0);
    const [city, setCity]=useState('');
    const [message, setMessage]=useState('');

    if (temp>=30){
        setMessage('Hace mucho calor')
    }else{
        setMessage('Hace mucho frio') 
    }

  return (
    <>
    <InputGroup
    labelClass={'search-label'}
    labelText={'Search City'}
    type={'search'}
    id={'search-bar'}
    className={'search-input'}
    onChange={setCity}
    />
    <div className='clima'>
        <p className='temp'>{temp}</p>
        <p className='city'>{city}</p>
        <p className='message'>{message}</p>
    </div>
    
    </>
  )
  
}

export default ClimaCiudad