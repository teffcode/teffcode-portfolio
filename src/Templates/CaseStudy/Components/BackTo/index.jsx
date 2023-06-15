import { Link } from 'react-router-dom'
import './index.css'

const BackTo = ({ url, text }) => {
  return (
    <Link to={url} className='back-to__link'>← {text}</Link>
  )
}

export default BackTo