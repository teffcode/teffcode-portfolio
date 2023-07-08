import { useState, useEffect } from 'react'
import CaseStudy from "../../Templates/CaseStudy"
import Loading from '../../Components/Loading'
import './index.css'

const CaseStudyNetworkingApp = () => {
  const [caseStudy, setCaseStudy] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/case-study-networking-app.json')
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
    <div className='case-study-networking-app'>
      {
        loading ? <Loading /> :
        caseStudy?.map((case_study, index) => (
          <CaseStudy
            key={index}
            mainTitle={case_study.main_title}
            overview={case_study.overview}
            empathizing={case_study.empathizing}
            designing={case_study.designing}
            redesigning={case_study.redesigning}
            goingForward={case_study.going_forward}
          />
        ))
      }
    </div>
  )
}

export default CaseStudyNetworkingApp