import Card from '../Card'
import './index.css'

const Home = () => {
  return (
    <div className='cards'>
      <Card color='pink' />
      <Card color='yellow' />
      <Card color='blue' />
    </div>
  )
}

export default Home