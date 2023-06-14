import './index.css'
import MainTitle from './Components/MainTitle'
import SectionCard from './Components/SectionCard'
import SectionTitle from './Components/SectionTitle'
import EmptyCard from './Components/EmptyCard'
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
  empathizingUserResearchSummaryDescription,
  empathizingUserResearchPainPointsTitle,
  empathizingUserResearchPainPoints,
  empathizingUserPersonaTitle,
  empathizingUserPersona,
  empathizingUserJourney,
  // Designing
  designingTitle,
  designingItems,
  designingPaperWireframes,
  designingDigitalWireframes,
  designingLowFidelityPrototype,
  designingUsabilityStudyFindings,
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
                  <EmptyCard
                    key={index}
                    title={content.title}
                    description={content.description}
                    position={content.position}
                    color={content.color}>
                    {content.icon_name}
                  </EmptyCard>
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
                <EmptyCard
                  key={index}
                  title={content.title}
                  description={content.description}
                  position={content.position}
                  color={content.color}>
                  {content.icon_name}
                </EmptyCard>
              )
            })
          }
        </div>
      </div>
      <SectionCard text={empathizingTitle} items={empathizingItems} />
      <div className='case-study__section'>
        <SectionTitle text={empathizingUserResearchSummaryTitle} />
        <FilledCard
          description={empathizingUserResearchSummaryDescription}>
          A
        </FilledCard>
        <Divider />
        <SectionTitle text={empathizingUserResearchPainPointsTitle} />
        <div className='empathizing__pain-points-section'>
          {
            empathizingUserResearchPainPoints?.map((pain_point, index) => {
              return (
                <FilledCard
                  key={index}
                  title={pain_point.title}
                  description={pain_point.description}
                  color={pain_point.color}>
                  {pain_point.icon_name}
                </FilledCard>
              )
            })
          }
        </div>
        <Divider />
        <SectionTitle text={empathizingUserPersonaTitle} />
        <div className='empathizing__persona-section'>
          {
            <EmptyCard
              title={empathizingUserPersona.title}
              description={empathizingUserPersona.description} />
          }
        </div>
        <Divider />
        <SectionTitle text={empathizingUserJourney.title} />
        <div className='empathizing__journey-section'>
          {
            <EmptyCard
              description={empathizingUserJourney.description} />
          }
        </div>
      </div>
      <SectionCard text={designingTitle} items={designingItems} />
      <div className='case-study__section'>
        <SectionTitle text={designingPaperWireframes.title} />
        <div className='designing__wireframes-section'>
          {
            <EmptyCard
              description={designingPaperWireframes.description} />
          }
        </div>
        <Divider />
        {
          designingDigitalWireframes?.map((wireframeInfo, index) => {
            return (
              <>
                <SectionTitle key={index} text={wireframeInfo.title} />
                <div className='designing__wireframes-section'>
                  {
                    <EmptyCard
                      description={wireframeInfo.description} />
                  }
                </div>
                <Divider />
              </>
            )
          })
        }
        <SectionTitle text={designingLowFidelityPrototype.title} />
        <div className='designing__low-fi-section'>
          <figure>
            <img src={designingLowFidelityPrototype.image_url} alt="" />
          </figure>
          <a
            href={designingLowFidelityPrototype.link.url}
            target='_blank'
            className='designing__link'>
            {designingLowFidelityPrototype.link.title}
          </a>
        </div>
        <Divider />
        <SectionTitle text={designingUsabilityStudyFindings.title} />
        <p className='designing__description'>{designingUsabilityStudyFindings.description}</p>
        <div className='designing__findings-section'>
          {
            designingUsabilityStudyFindings?.findings?.map((finfing, index) => {
              return (
                <FilledCard
                  key={index}
                  title={finfing.title}
                  items={finfing.items} />
              )
            })
          }
        </div>
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