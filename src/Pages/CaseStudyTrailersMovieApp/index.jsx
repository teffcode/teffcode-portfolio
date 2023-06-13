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
        caseStudy?.map((case_study, index) => (
          <CaseStudy
            key={index}
            mainTitle={case_study.main_title}
            overviewTitle={case_study.overview.title}
            empathizingTitle={case_study.empathizing.title}
            empathizingItems={case_study.empathizing.items}
            empathizingUserResearchSummaryTitle={case_study.empathizing.user_research_summary.title}
            empathizingUserResearchPainPointsTitle={case_study.empathizing.user_research_pain_points.title}
            empathizingUserPersonaTitle={case_study.empathizing.user_persona.title}
            empathizingUserJourneyTitle={case_study.empathizing.user_journey.title}
          />
        ))
      }
    </div>
  )
}

export default CaseStudyTrailersMovieApp