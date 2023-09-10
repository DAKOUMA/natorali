import React from 'react'
import { anselme } from '../../assets'

function Team(props) {

const personList = [
  {nom:'RAMERISON Rhodeli', poste:'Communication', src:anselme},
  {nom:'RAMERISON Eddy', poste:'Gerant', src:anselme},
  {nom:'RAMERISON Anselme', poste:'Commerciale', src:anselme},
]

  const Id = ({nom, poste, src}) => {
    return (
      <div className='Team__container-person'>
        <div className='Team__container-person_image'><img src={anselme}/></div>
        <h1>{nom}</h1>
        <p>{poste}</p>
      </div>
    )
  }

  return (
    <div className='Team margin-section' ref={props.customRef}>
        <h1>Notre équipe</h1>
        <div className='Team__container'>
          {personList.map((value, index) => (<Id {...value} key={index}/>))}
        </div>
    </div>
  )
}

export default Team