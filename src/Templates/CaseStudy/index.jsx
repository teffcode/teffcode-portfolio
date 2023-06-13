import './index.css'
import MainTitle from './Components/MainTitle'
import SectionTitle from './Components/SectionTitle'
import Divider from './Components/Divider'

const CaseStudy = ({
  mainTitle,
  overviewTitle,
  empathizingUserResearchSummaryTitle,
  empathizingUserResearchPainPointsTitle,
  empathizingUserPersonaTitle,
  empathizingUserJourneyTitle
}) => {
  return (
    <div className='case-study'>
      <MainTitle text={mainTitle} />
      <SectionTitle text={overviewTitle} />
      <Divider />
      <SectionTitle text={empathizingUserResearchSummaryTitle} />
      <Divider />
      <SectionTitle text={empathizingUserResearchPainPointsTitle} />
      <Divider />
      <SectionTitle text={empathizingUserPersonaTitle} />
      <Divider />
      <SectionTitle text={empathizingUserJourneyTitle} />
    </div>
  )
}

export default CaseStudy