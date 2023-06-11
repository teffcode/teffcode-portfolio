import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component'
import { Blurhash } from 'react-blurhash'
import Loading from '../Loading'
import 'react-lazy-load-image-component/src/effects/blur.css'
import './index.css'

const PostsContainer = () => {
  const [posts, setPosts] = useState()
  const [loading, setLoading] = useState(true)
  const [postLoaded, setPostLoaded] = useState([])

  const handlePostLoad = (index) => {
    setPostLoaded((prevLoaded) => {
      const loaded = [...prevLoaded]
      loaded[index] = true
      return loaded
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/posts.json')
        const data = await response.json()
        setPosts(data)
        setLoading(false)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className='posts'>
      <p className='posts__title'>In this section, you will find tutorials in Spanish that I have created specifically for you to practice HTML, CSS, and JavaScript.</p>
      <div className='posts__container'>
        {
          loading ? <Loading /> :
          posts?.map((post, index) => (
            <Link to={post.post_url} target="_blank" key={post.id} className='post__link'>
              <LazyLoadComponent>
                <div className='post__container'>
                  <Blurhash
                    hash={post.hash}
                    height={300}
                    resolutionX={32}
                    resolutionY={32}
                    className='post__blur' />
                  <LazyLoadImage
                    alt={post.alt_description}
                    height={300}
                    src={`${post.image_url}`}
                    afterLoad={() => handlePostLoad(index)}
                    className={postLoaded[index] ? 'post__lazy-load visible' : 'post__lazy-load non-visible'} />
                </div>
              </LazyLoadComponent>
              <p className='post__general-info'>
                <span>{post.date}</span>
                <span>{post.technologies}</span>
              </p>
              <p className='post__description'>
                <span>{post.title}</span>
                <span>{post.description}</span>
              </p>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default PostsContainer