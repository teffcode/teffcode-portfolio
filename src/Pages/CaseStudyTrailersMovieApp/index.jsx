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
            overviewMain={case_study.overview.main}
            overviewGeneral={case_study.overview.general}
            // Empathizing
            empathizingTitle={case_study.empathizing.title}
            empathizingItems={case_study.empathizing.items}
            empathizingUserResearchSummaryTitle={case_study.empathizing.user_research_summary.title}
            empathizingUserResearchSummaryDescription={case_study.empathizing.user_research_summary.description}
            empathizingUserResearchPainPointsTitle={case_study.empathizing.user_research_pain_points.title}
            empathizingUserResearchPainPoints={case_study.empathizing.user_research_pain_points.pain_points}
            empathizingUserPersonaTitle={case_study.empathizing.user_persona.title}
            empathizingUserPersona={case_study.empathizing.user_persona.persona}
            empathizingUserJourney={case_study.empathizing.user_journey}
            // Designing
            designingTitle={case_study.designing.title}
            designingItems={case_study.designing.items}
            designingPaperWireframes={case_study.designing.paper_wireframes}
            designingDigitalWireframes={case_study.designing.digital_wireframes}
            designingLowFidelityPrototype={case_study.designing.low_fidelity_prototype}
            designingUsabilityStudyFindings={case_study.designing.usability_study_findings}
            // Redesigning
            redesigningTitle={case_study.redesigning.title}
            redesigningItems={case_study.redesigning.items}
            redesigningMockups={case_study.redesigning.mockups}
            redesigningKeyMockupsTitle={case_study.redesigning.key_mockups.title}
            redesigningHighFidelityPrototype={case_study.redesigning.high_fidelity_prototype}
            redesigningAccessibilityConsiderations={case_study.redesigning.accessibility_considerations}
            // Going Forward
            goingForwardTitle={case_study.going_forward.title}
            goingForwardItems={case_study.going_forward.items}
            goingForwardTakeawaysTitle={case_study.going_forward.takeaways.title}
            goingForwardNextStepsTitle={case_study.going_forward.next_steps.title}
            goingForwardTitleLetsConnect={case_study.going_forward.lets_connect.title}
          />
        ))
      }
    </div>
  )
}

export default CaseStudyTrailersMovieApp