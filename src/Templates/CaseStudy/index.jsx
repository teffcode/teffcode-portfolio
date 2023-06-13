import './index.css'
import MainTitle from './Components/MainTitle'
import SectionCard from './Components/SectionCard'
import SectionTitle from './Components/SectionTitle'
import FilledCard from './Components/FilledCard'
import Divider from './Components/Divider'

const CaseStudy = ({
  mainTitle,
  overviewTitle,
  overviewMain,
  overviewGeneral,
  // Empathizing
  empathizingTitle,
  empathizingItems,
  empathizingUserResearchSummaryTitle,
  empathizingUserResearchPainPointsTitle,
  empathizingUserPersonaTitle,
  empathizingUserJourneyTitle,
  // Designing
  designingTitle,
  designingItems,
  designingPaperWireframesTitle,
  designingDigitalWireframes,
  designingLowFidelityPrototypeTitle,
  designingUsabilityStudyFindingsTitle,
  // Redesigning
  redesigningTitle,
  redesigningItems,
  redesigningMockups,
  redesigningKeyMockupsTitle,
  redesigningHighFidelityPrototypeTitle,
  redesigningAccessibilityConsiderationsTitle,
  // Going Forward
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
        <div className='overview__main-section'>
          <div className='overview__main-section--left'>
            {
              overviewMain?.content?.map((content, index) => {
                return (
                  <FilledCard
                    key={index}
                    title={content.title}
                    description={content.description}
                    position={content.position}
                    color={content.color}>
                    {content.icon_name}
                  </FilledCard>
                )
              })
            }
          </div>
          <figure>
            <img src={overviewMain.image_url} alt={overviewMain.image_alt} />
          </figure>
        </div>
        <Divider />
        <div className='overview__general-section'>
          {
            overviewGeneral?.map((content, index) => {
              return (
                <FilledCard
                  key={index}
                  title={content.title}
                  description={content.description}
                  position={content.position}
                  color={content.color}>
                  {content.icon_name}
                </FilledCard>
              )
            })
          }
        </div>
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