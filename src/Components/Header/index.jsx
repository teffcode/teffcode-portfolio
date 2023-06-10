import { NavLink } from 'react-router-dom'
import Presentation from '../../Assets/Presentation.png'
import './index.css'

const Header = () => {
  return (
    <>
      <nav className='navbar'>
        <div className='routing'>
          <NavLink to='/' className={({ isActive }) => isActive ? 'routing__label--active' : 'routing__label'}>
            UX Portfolio
          </NavLink>
          <NavLink to='/development' className={({ isActive }) => isActive ? 'routing__label--active' : 'routing__label'}>
            Development
          </NavLink>
          <NavLink to='/about' className={({ isActive }) => isActive ? 'routing__label--active' : 'routing__label'}>
            About
          </NavLink>
        </div>
      </nav>
      <figure className='presentation'>
        <img src={Presentation} alt="Presentation: Hi, I'm Estefany Aguilar. Frontend Developer and UX Designer." className='presentation__image' />
      </figure>
    </>
  )
}

export default Header