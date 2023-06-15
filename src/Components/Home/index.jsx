import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component'
import { Blurhash } from 'react-blurhash'
import Loading from '../Loading'
import 'react-lazy-load-image-component/src/effects/blur.css'
import './index.css'

const Home = () => {
  const [topics, setTopics] = useState()
  const [loading, setLoading] = useState(true)
  const [topicLoaded, setTopicLoaded] = useState([])

  const handleTopicLoad = (index) => {
    setTopicLoaded((prevLoaded) => {
      const loaded = [...prevLoaded]
      loaded[index] = true
      return loaded
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/topics.json')
        const data = await response.json()
        setTopics(data)
        setLoading(false)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className='home'>
      <h1 className='home__title'>Welcome to my website !</h1>
      <p className='home__description'>I am thrilled and excited that you're here. On this page, you will find:</p>
      <div className='topics'>
        {
          loading ? <Loading /> :
          topics?.map((topic, index) => (
            <Link to={topic.topic_url} key={topic.id} className='topic__link'>
              <LazyLoadComponent>
                <div className='topic__container'>
                  <Blurhash
                    hash={topic.hash}
                    height={300}
                    resolutionX={32}
                    resolutionY={32}
                    className='topic__blur' />
                  <LazyLoadImage
                    alt={topic.alt_description}
                    height={300}
                    src={`${topic.image_url}`}
                    afterLoad={() => handleTopicLoad(index)}
                    className={topicLoaded[index] ? 'topic__lazy-load visible' : 'topic__lazy-load non-visible'} />
                </div>
              </LazyLoadComponent>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Home