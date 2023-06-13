import { Link } from 'react-router-dom'
import Card from '../Card'
import './index.css'

const Home = () => {
  return (
    <div className='ux'>
      <h1 className='ux__title'>UX · Case studies</h1>
      <p className='ux__subtitle'>In this section, you will find a collection of case studies that I have specifically conducted for the Google UX certification.</p>
      <div className='cards'>
        <Link to='/ux/case-study-trailers-movie-app' key='1' className='case-study__link'>
          <Card />
        </Link>
      </div>
    </div>
  )
}

export default Home