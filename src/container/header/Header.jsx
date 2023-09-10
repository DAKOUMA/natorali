import React, { useState } from 'react';
import { Navbar } from '../../component'
import { bars, cross } from '../../assets'

function Header(props) {
  const [open, setOpen] = useState(false)

  const toggleButton = () => {
    setOpen(!open)
  }

  const scrollToHome = () => {
    props.customRef.homeRef.current.scrollIntoView({behavior:'smooth'})
  }

  return (
    <div className='Header px-4 flex flex-row justify-between items-center backdrop-blur-3xl'>
        <p className='cursor-pointer' onClick={scrollToHome}>Natorali</p>
        <img src={open ? cross : bars} onClick={toggleButton} className='cursor-pointer'/>
        <Navbar status={open} customRef={props.customRef} />
    </div>
  )
}

export default Header