import { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component'
import { Blurhash } from 'react-blurhash'
import Presentation from '../../Assets/Presentation.png'
import 'react-lazy-load-image-component/src/effects/blur.css'
import './index.css'

const Header = () => {
  const [presentationLoaded, setPresentationLoaded] = useState([])

  const handlePresentationLoad = (index) => {
    setPresentationLoaded((prevLoaded) => {
      const loaded = [...prevLoaded]
      loaded[index] = true
      return loaded
    })
  }

  return (
    <>
      <nav className='navbar'>
        <div className='routing'>
          <NavLink to='/' className={({ isActive }) => isActive ? 'routing__label--active' : 'routing__label'}>
            UX Portfolio
          </NavLink>
          <NavLink to='/development/blog' className={({ isActive }) => isActive ? 'routing__label--active' : 'routing__label'}>
            Development
          </NavLink>
          <NavLink to='/about' className={({ isActive }) => isActive ? 'routing__label--active' : 'routing__label'}>
            About
          </NavLink>
        </div>
      </nav>
      <LazyLoadComponent>
        <figure className='presentation__container'>
          <Blurhash
            hash='U45E]X8^Dh?cV?jYbIkD00?w-;8^t8azaej@'
            className='presentation__blur' />
          <LazyLoadImage
            alt="Presentation: Hi, I'm Estefany Aguilar. Frontend Developer and UX Designer."
            src={Presentation}
            afterLoad={() => handlePresentationLoad(1)}
            className={presentationLoaded[1] ? 'presentation__lazy-load visible' : 'presentation__lazy-load non-visible'} />
        </figure>
      </LazyLoadComponent>
    </>
  )
}

export default Header