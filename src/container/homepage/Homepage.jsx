import React from 'react';
import { chicken, factory, plant, home } from '../../assets';

function Homepage(props) {

  const scrollToActivity = () => {
    props.customRef.activityRef.current.scrollIntoView({behavior:'smooth'})
  }

  const ActivityList = [
    {title:"Elevage", src:chicken, text:{one:"Sans traitement hormonale", two:"Source d'engrais totalement naturelle"}},
    {title:"Agriculture", src:plant, text:{one:"Aucun engrais chimique", two:"Nouvelle alternative de revenue pour les agriculteurs"}},
    {title:"Transformation", src:factory, text:{one:"100% Pure", two:"Première pression a froid et naturelle"}}
  ]

  const ActivityPrev = ({title, src, text:{one,two}}) => {
    return (
      <div className='Homepage__ruban-activity mx-4'>
        <img src={src} className='mr-2'/>
        <div>
          <h1>{title}</h1>
          <p>{one}</p>
          <p>{two}</p>
        </div>
      </div>
    )
  }

  return (
    <div className='Homepage margin-section' ref={props.customRef.homeRef}>
        <div className='Homepage__image absolute' style={{'backgroundImage':`url(${home})`}} />
        <div className='Homepage__ruban absolute'>
          {ActivityList.map( (value,index) => (
            <ActivityPrev {...value} key={index} />
          ))}
        </div>
        <div className='Homepage__preview absolute'>
            <div >
              <h1>Natorali</h1>
              <span>SARL</span>
            </div>
            <p>Nous somme une huilerie spécialiser dans les huiles végétale 100% pure, pressée a froid. Nos activité ne se limite pas à la simple transformation d’huile, l’agriculture et l’élevage en font partie.</p>
            <button className='mx-auto' onClick={scrollToActivity}>En savoir plus</button>
        </div>
    </div>
  )
}

export default Homepage