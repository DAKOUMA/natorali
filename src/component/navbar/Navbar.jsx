import React from 'react'

function Navbar(props) {

  const scrollToActivity = () => {
    props.customRef.activityRef.current.scrollIntoView({behavior:'smooth'})
  }
  const scrollToProduct = () => {
    props.customRef.productRef.current.scrollIntoView({behavior:'smooth'})
  }
  const scrollToTeam = () => {
    props.customRef.teamRef.current.scrollIntoView({behavior:'smooth'})
  }
  const scrollToContact = () => {
    props.customRef.contactRef.current.scrollIntoView({behavior:'smooth'})
  }

  const Link = () => (
    <>
      <a className='cursor-pointer' onClick={scrollToActivity}>Nos activités</a>
      <a className='cursor-pointer' onClick={scrollToProduct}>Nos produits</a>
      <a className='cursor-pointer' onClick={scrollToTeam}>Notre équipe</a>
      <a className='cursor-pointer' onClick={scrollToContact}>Contacter nous</a>
    </>
  )

  return (
    <>
      <nav className='Header__navbar'>
        <Link/>
      </nav>
      <nav style={props.status ? {'right':'0rem'} : {'right':'-15rem'}} className='Header__navbar-responsive shadow-2xl'>
        <Link/>
      </nav>
    </>
  )
}

export default Navbar