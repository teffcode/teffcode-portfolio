import './index.css'
import MainTitle from './Components/MainTitle'
import SectionCard from './Components/SectionCard'
import SectionTitle from './Components/SectionTitle'
import Divider from './Components/Divider'

const CaseStudy = ({
  mainTitle,
  overviewTitle,
  empathizingTitle,
  empathizingItems,
  empathizingUserResearchSummaryTitle,
  empathizingUserResearchPainPointsTitle,
  empathizingUserPersonaTitle,
  empathizingUserJourneyTitle,
  designingTitle,
  designingItems,
  designingPaperWireframesTitle,
  designingDigitalWireframes,
  designingLowFidelityPrototypeTitle,
  designingUsabilityStudyFindingsTitle,
  redesigningTitle,
  redesigningItems,
  redesigningMockups,
  redesigningKeyMockupsTitle,
  redesigningHighFidelityPrototypeTitle,
  redesigningAccessibilityConsiderationsTitle,
  goingForwardTitle,
  goingForwardItems,
  goingForwardTakeawaysTitle,
  goingForwardNextStepsTitle,
  goingForwardTitleLetsConnect
}) => {
  return (
    <div className='case-study'>
      <MainTitle text={mainTitle} />
      <div className='case-study__section'>
        <SectionTitle text={overviewTitle} />
      </div>
      <SectionCard text={empathizingTitle} items={empathizingItems} />
      <div className='case-study__section'>
        <SectionTitle text={empathizingUserResearchSummaryTitle} />
        <Divider />
        <SectionTitle text={empathizingUserResearchPainPointsTitle} />
        <Divider />
        <SectionTitle text={empathizingUserPersonaTitle} />
        <Divider />
        <SectionTitle text={empathizingUserJourneyTitle} />
      </div>
      <SectionCard text={designingTitle} items={designingItems} />
      <div className='case-study__section'>
        <SectionTitle text={designingPaperWireframesTitle} />
        <Divider />
        {
          designingDigitalWireframes?.map((wireframeInfo, index) => {
            return (
              <>
                <SectionTitle key={index} text={wireframeInfo.title} />
                <Divider />
              </>
            )
          })
        }
        <SectionTitle text={designingLowFidelityPrototypeTitle} />
        <Divider />
        <SectionTitle text={designingUsabilityStudyFindingsTitle} />
      </div>
      <SectionCard text={redesigningTitle} items={redesigningItems} />
      <div className='case-study__section'>
        {
          redesigningMockups?.map((mockupInfo, index) => {
            return (
              <>
                <SectionTitle key={index} text={mockupInfo.title} />
                <Divider />
              </>
            )
          })
        }
        <SectionTitle text={redesigningKeyMockupsTitle} />
        <Divider />
        <SectionTitle text={redesigningHighFidelityPrototypeTitle} />
        <Divider />
        <SectionTitle text={redesigningAccessibilityConsiderationsTitle} />
      </div>
      <SectionCard text={goingForwardTitle} items={goingForwardItems} />
      <div className='case-study__section'>
        <SectionTitle text={goingForwardTakeawaysTitle} />
        <Divider />
        <SectionTitle text={goingForwardNextStepsTitle} />
        <Divider />
        <SectionTitle text={goingForwardTitleLetsConnect} />
      </div>
    </div>
  )
}

export default CaseStudy