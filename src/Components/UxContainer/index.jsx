import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component'
import { Blurhash } from 'react-blurhash'
import Loading from '../Loading'
import 'react-lazy-load-image-component/src/effects/blur.css'
import './index.css'

const UxContainer = () => {
  const [caseStudies, setCaseStudies] = useState()
  const [loading, setLoading] = useState(true)
  const [caseStudyLoaded, setCaseStudyLoaded] = useState([])

  const handleCaseStudyLoad = (index) => {
    setCaseStudyLoaded((prevLoaded) => {
      const loaded = [...prevLoaded]
      loaded[index] = true
      return loaded
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/case-studies.json')
        const data = await response.json()
        setCaseStudies(data)
        setLoading(false)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className='ux'>
      <h1 className='ux__title'>UX · Case studies</h1>
      <p className='ux__subtitle'>In this section, you will find a collection of case studies that I have specifically conducted for the Google UX certification.</p>
      <div className='case-studies__container'>
        {
          loading ? <Loading /> :
          caseStudies?.map((caseStudy, index) => (
            <Link to={caseStudy.case_study_url} target={caseStudy.target} key={caseStudy.id} className='case-study__link'>
              <LazyLoadComponent>
                <div className='case-study__container'>
                  <Blurhash
                    hash={caseStudy.hash}
                    height={300}
                    resolutionX={32}
                    resolutionY={32}
                    className='case-study__blur' />
                  <LazyLoadImage
                    alt={caseStudy.alt_description}
                    height={300}
                    src={`${caseStudy.image_url}`}
                    afterLoad={() => handleCaseStudyLoad(index)}
                    className={caseStudyLoaded[index] ? 'case-study__lazy-load visible' : 'case-study__lazy-load non-visible'} />
                </div>
              </LazyLoadComponent>
              <p className='case-study__info'>
                <span>{caseStudy.title}</span>
                <span>{caseStudy.certificate}</span>
              </p>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default UxContainer