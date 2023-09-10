import React from 'react'

function Circle({indexOf, title, src, text:{one, two, three}}) {
  return (
    <div className='Circle' key={indexOf}>
        <div className='rounded-full img' style={{'backgroundImage':`url(${src})`}}/>
        <div className='Circle__text'>
          <h1>{title}</h1>
          <ul>
            <li>{one}</li>
            <li>{two}</li>
            <li>{three}</li>
          </ul>
        </div>
    </div>
  )
}

export default Circle