import { NavLink } from 'react-router-dom'
import TwitterLogo from '../../Assets/Twitter.svg'
import GithubLogo from '../../Assets/Github.svg'
import LinkedinLogo from '../../Assets/Linkedin.svg'
import BehanceLogo from '../../Assets/Behance.svg'
import DribbbleLogo from '../../Assets/Dribbble.svg'
import './index.css'

const Header = () => {
  return (
    <>
      <div className='social-media'>
        <a href="https://twitter.com/teffcode" target="_blank" className='social-media__link'>
          <img src={TwitterLogo} alt="Twitter logo" className='social-media__icon' />
        </a>
        <a href="https://github.com/teffcode" target="_blank" className='social-media__link'>
          <img src={GithubLogo} alt="Github logo" className='social-media__icon' />
        </a>
        <a href="https://www.linkedin.com/in/teffcode/" target="_blank" className='social-media__link'>
          <img src={LinkedinLogo} alt="Linkedin logo" className='social-media__icon' />
        </a>
        <a href="https://www.behance.net/teffcode" target="_blank" className='social-media__link'>
          <img src={BehanceLogo} alt="Behance logo" className='social-media__icon' />
        </a>
        <a href="https://dribbble.com/teffcode" target="_blank" className='social-media__link'>
          <img src={DribbbleLogo} alt="Dribbble logo" className='social-media__icon' />
        </a>
      </div>
      <div className='routing'>
        <NavLink to='/' className={({ isActive }) => isActive ? 'routing__label--active' : 'routing__label'}>
          UX Portfolio
        </NavLink>
        <NavLink to='/about' className={({ isActive }) => isActive ? 'routing__label--active' : 'routing__label'}>
          About
        </NavLink>
      </div>
    </>
  )
}

export default Header