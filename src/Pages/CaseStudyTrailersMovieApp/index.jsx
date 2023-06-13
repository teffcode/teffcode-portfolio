import { useState, useEffect } from 'react'
import CaseStudy from "../../Templates/CaseStudy"
import Loading from '../../Components/Loading'
import './index.css'

const CaseStudyTrailersMovieApp = () => {
  const [caseStudy, setCaseStudy] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/case-study-trailers-movie-app.json')
        const data = await response.json()
        setCaseStudy(data)
        setLoading(false)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className='case-study-trailers-movie-app'>
      {
        loading ? <Loading /> :
        caseStudy?.map((caseStudy, index) => (
          <CaseStudy
            key={index}
            mainTitle={caseStudy.main_title}
          />
        ))
      }
    </div>
  )
}

export default CaseStudyTrailersMovieApp