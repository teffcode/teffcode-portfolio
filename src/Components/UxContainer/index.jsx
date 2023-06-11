import Card from '../Card'
import './index.css'

const Home = () => {
  return (
    <div className='ux'>
      <p className='ux__title'>In this section, you will find a collection of case studies that I have specifically conducted for the Google UX certification.</p>
      <div className='cards'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Home