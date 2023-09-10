import React from 'react'
import Slider from 'react-slick';

import { carousselBottle, carousselChicken, carousselSeed } from '../../assets';

function Caroussel(src) {

  const carousselList = [
    {index:1 ,title:"Elevage", src:carousselChicken, text:"Elevage en pleine air et sans aucun traitement hormonaux, un élevage qui nous octroie un engrais naturelle pour l'agriculture."},
    {index:2 ,title:"Transformation", src:carousselBottle, text:"Avec une production anuelle de 55.000kg huile végétale, naturelle. Nous nous distiguons de par la qualité et la pureté de nos huiles."},
    {index:3 , title:"Agriculture", src:carousselSeed, text:"L'agriculture qui nous approvisionne en matière première, naturelle. Tout en offrons à de nombreux agriculteure une nouvelle altérnative."}
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 1,
    speed: 500,
    responsive: [
       {
        breakpoint: 600,
        settings: {
          infinite: true,
          centerPadding: "0px",
          slidesToShow: 1,
          speed: 500,
        }
       }
    ]
  };

  const CarousselItem = ({index, title, src, text}) => {
    return (
      <div className='Caroussel__item' key={index}>
        <h1>{title}</h1>
        <div style={{"backgroundImage":`url(${src})`}}></div>
        <p>{text}</p>
      </div>
    )
  }

  return (
    <div className='Caroussel h-80 mx-auto'>
      <Slider {...settings}>
        {carousselList.map((value, index) => (<CarousselItem {...value} key={index}/>))}
      </Slider>
    </div>
  )
}

export default Caroussel