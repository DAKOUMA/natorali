import React from 'react'
import { fenugrec, foraha, ricin, sesame } from '../../assets'
import Circle from '../../component/circle/Circle'


function Product(props) {
  const productList = [
    {indexOf:'4', title: "Huiles de Sesame", src: sesame, text: {one: "Alimentaire", two: "100% pure", three: "Naturelle"}},
    {indexOf:'5', title: "Huiles Foraha", src: foraha, text: {one: "Thérapeutique", two: "100% pure", three: "Naturelle"}},
    {indexOf:'6', title: "Huiles de Fenugrec", src: fenugrec, text: {one: "Thérapeutique", two: "100% pure", three: "Naturelle"}},
    {indexOf:'7', title: "Huiles de Ricin", src: ricin, text: {one: "Cosmétique", two: "100% pure", three: "Naturelle"}},
    {indexOf:'8', title: "Huiles de Baobab", src: ricin, text: {one: "Cosmétique", two: "100% pure", three: "Naturelle"}},
  ]

  return (
    <div className='Product margin-section' ref={props.customRef}>
        <h1>Nos produits</h1>
        <p>Des huiles 100% pure, et naturelle de première pression a froid.</p>
        <div className='Product__container'>
          {
            productList.map((value,index) => <Circle key={index} {...value}/>)
          }
        </div>
    </div>
  )
}

export default Product