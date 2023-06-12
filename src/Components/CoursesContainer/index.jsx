import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component'
import { Blurhash } from 'react-blurhash'
import Loading from '../Loading'
import 'react-lazy-load-image-component/src/effects/blur.css'
import './index.css'

const CoursesContainer = () => {
  const [courses, setCourses] = useState()
  const [loading, setLoading] = useState(true)
  const [courseLoaded, setCourseLoaded] = useState([])

  const handleCourseLoad = (index) => {
    setCourseLoaded((prevLoaded) => {
      const loaded = [...prevLoaded]
      loaded[index] = true
      return loaded
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/courses.json')
        const data = await response.json()
        setCourses(data)
        setLoading(false)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className='courses'>
      <h1 className='courses__title'>Courses</h1>
      <p className='courses__subtitle'>In this section, you will find courses in Spanish that I have created with Platzi to help you become an expert in Frontend technologies.</p>
      <div className='courses__container'>
        {
          loading ? <Loading /> :
          courses?.map((course, index) => (
            <Link to={course.course_url} target="_blank" key={course.id} className='course__link'>
              <LazyLoadComponent>
                <div className='course__container'>
                  <Blurhash
                    hash={course.hash}
                    height={300}
                    resolutionX={32}
                    resolutionY={32}
                    className='course__blur' />
                  <LazyLoadImage
                    alt={course.alt_description}
                    height={300}
                    src={`${course.image_url}`}
                    afterLoad={() => handleCourseLoad(index)}
                    className={courseLoaded[index] ? 'course__lazy-load visible' : 'course__lazy-load non-visible'} />
                </div>
              </LazyLoadComponent>
              <p className='course__info'>
                <span>{course.title}</span>
                <span>{course.platform}</span>
              </p>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default CoursesContainer