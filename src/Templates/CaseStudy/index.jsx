import MainTitle from './Components/MainTitle'
import SectionCard from './Components/SectionCard'
import SectionTitle from './Components/SectionTitle'
import EmptyCard from './Components/EmptyCard'
import FilledCard from './Components/FilledCard'
import Divider from './Components/Divider'
import BackTo from './Components/BackTo'
import './index.css'

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
  redesigningHighFidelityPrototype,
  redesigningAccessibilityConsiderations,
  // Going Forward
  goingForward
}) => {
  return (
    <div className='case-study'>
      <MainTitle text={mainTitle} />
      <div className='back-to__header'>
        <BackTo url='/ux' text='Back to case studies' />
      </div>
      <div className='case-study__section'>
        <div className='overview__main-section'>
          <div className='overview__main-section--left'>
            <SectionTitle text={overviewTitle} />
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
          <figure className='evidence__container'>
            <img className='evidence__image' src={overviewMain.image_url} alt={overviewMain.image_alt} />
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
          <figure className='evidence__container'>
            <img className='evidence__image' src={empathizingUserPersona.image_url} alt="" />
          </figure>
        </div>
        <Divider />
        <SectionTitle text={empathizingUserJourney.title} />
        <div className='empathizing__journey-section'>
          {
            <EmptyCard
              description={empathizingUserJourney.description} />
          }
          <figure className='evidence__container'>
            <img className='evidence__image' src={empathizingUserJourney.image_url} alt="" />
          </figure>
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
                <div className='redesigning__mockups-section'>
                  {
                    <EmptyCard
                      description={mockupInfo.description} />
                  }
                </div>
                <Divider />
              </>
            )
          })
        }
        <SectionTitle text={redesigningKeyMockupsTitle} />
        <Divider />
        <SectionTitle text={redesigningHighFidelityPrototype.title} />
        <div className='redesigning__hi-fi-section'>
          <figure>
            <img src={redesigningHighFidelityPrototype.image_url} alt="" />
          </figure>
          <a
            href={redesigningHighFidelityPrototype.link.url}
            target='_blank'
            className='redesigning__link'>
            {redesigningHighFidelityPrototype.link.title}
          </a>
        </div>
        <Divider />
        <SectionTitle text={redesigningAccessibilityConsiderations.title} />
        <div className='redesing__a11y-section'>
          {
            redesigningAccessibilityConsiderations?.considerations.map((consideration, index) => {
              return (
                <FilledCard
                  key={index}
                  description={consideration.description}>
                  {consideration.icon_name}
                </FilledCard>
              )
            })
          }
        </div>
      </div>
      <SectionCard text={goingForward.title} items={goingForward.items} />
      <div className='case-study__section'>
        <SectionTitle text={goingForward.takeaways.title} />
        <div className='going-forward__takeaways-section'>
          {
            goingForward.takeaways?.items.map((takeaways, index) => {
              return (
                <EmptyCard
                  key={index}
                  title={takeaways.title}
                  description={takeaways.description}
                  position={takeaways.position}>
                  {takeaways.icon_name}
                </EmptyCard>
              )
            })
          }
        </div>
        <Divider />
        <SectionTitle text={goingForward.next_steps.title} />
        <div className='going-forward__next-steps-section'>
          {
            goingForward.next_steps?.items.map((next_step, index) => {
              return (
                <FilledCard
                  key={index}
                  description={next_step.description}>
                  {next_step.icon_name}
                </FilledCard>
              )
            })
          }
        </div>
        <Divider />
        <SectionTitle text={goingForward.lets_connect.title} />
        <p className='going-forward__description'>
          Thank you for checking out my work on the Trailer’s Movie app and feel free to <a href="mailto:teffcode@gmail.com" className='going-forward__mailto'><b>reach out</b></a> !
        </p>
        <div className='back-to__footer'>
          <BackTo url='/ux' text='Back to case studies' />
        </div>
      </div>
    </div>
  )
}

export default CaseStudy