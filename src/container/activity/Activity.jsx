import React from 'react'
import { carousselBottle, carousselChicken, carousselSeed } from '../../assets'
import { Caroussel } from '../../component'
import SimpleSlider from '../../component/caroussel/ReactSlick'
import ReactSlick from '../../component/caroussel/ReactSlick'

const src = {carousselBottle, carousselChicken, carousselSeed}


function Activity(props) {
  return (
    <div className='Activity margin-section' ref={props.customRef} >
      <h1>Nos activités</h1>
      <p>Natorali SARL, une huilerie au coeur de la ville de Toamasina, spécialisé dans la produciont d’huiles 100% pure, et naturelle de premières pression a froid, élevage et agriculture</p>
      <Caroussel/>
    </div>
  )
}

export default Activity