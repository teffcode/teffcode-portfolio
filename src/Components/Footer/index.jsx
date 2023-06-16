import TwitterLogo from '../../Assets/Twitter.svg'
import GithubLogo from '../../Assets/Github.svg'
import LinkedinLogo from '../../Assets/Linkedin.svg'
import BehanceLogo from '../../Assets/Behance.svg'
import DribbbleLogo from '../../Assets/Dribbble.svg'
import MediumLogo from '../../Assets/Medium.svg'
import './index.css'

const Footer = () => {
  return (
    <div className='footer'>
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
        <a href="https://medium.com/@teffcode" target="_blank" className='social-media__link'>
          <img src={MediumLogo} alt="Medium logo" className='social-media__icon' />
        </a>
      </div>
      <p className='footer__text'>
        <span>
          If you enjoyed my work, you can treat me to a cup of coffee <a href="https://www.buymeacoffee.com/teffcode" className='footer__link'><b>here</b></a>.
        </span>
        <span>
          © 2023. All Rights Reserved to Estefany Aguilar Restrepo.
        </span>
      </p>
    </div>
  )
}

export default Footer