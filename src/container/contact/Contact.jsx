import React from 'react';
import { facebook, gmail } from '../../assets';

function Contact(props) {

  return (
    <div className='Contact margin-section' ref={props.customRef}>
        <h1>Contacter nous</h1>
        <div className='Contact__text mx-auto'>
          <div className='Contact__text-title '>
            <h1>Natorali</h1>
            <span>SARL</span>
          </div>
          <p className='mx-auto text-center'>Lot 92-B Cité Procoops, parcelle 31/22 Toamasina 501, Region Antsinanana Madagascar</p>
          <div className='Contact__text-social flex justify-around'>
            <a href='https://web.facebook.com/natorali'><img className='cursor-pointer w-10' src={facebook}/></a>
            <a href='mailto:contact@natorali.com'><img className='cursor-pointer w-10 rounded-md' src={gmail}/></a>
          </div>
        </div>
    </div>
  )
}

export default Contact