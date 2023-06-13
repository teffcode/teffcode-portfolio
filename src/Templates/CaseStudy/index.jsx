import './index.css'
import MainTitle from './Components/MainTitle'
import SectionCard from './Components/SectionCard'
import SectionTitle from './Components/SectionTitle'
import Divider from './Components/Divider'

const CaseStudy = ({
  mainTitle,
  overviewTitle,
  empathizingTitle,
  empathizingUserResearchSummaryTitle,
  empathizingUserResearchPainPointsTitle,
  empathizingUserPersonaTitle,
  empathizingUserJourneyTitle
}) => {
  return (
    <div className='case-study'>
      <MainTitle text={mainTitle} />
      <div className='case-study__section'>
        <SectionTitle text={overviewTitle} />
      </div>
      <SectionCard text={empathizingTitle} />
      <div className='case-study__section'>
        <SectionTitle text={empathizingUserResearchSummaryTitle} />
        <Divider />
        <SectionTitle text={empathizingUserResearchPainPointsTitle} />
        <Divider />
        <SectionTitle text={empathizingUserPersonaTitle} />
        <Divider />
        <SectionTitle text={empathizingUserJourneyTitle} />
      </div>
    </div>
  )
}

export default CaseStudy