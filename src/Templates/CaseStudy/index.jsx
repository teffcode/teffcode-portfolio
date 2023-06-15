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
  overview,
  empathizing,
  designing,
  redesigning,
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
            <SectionTitle text={overview.title} />
            {
              overview.main?.content?.map((content, index) => {
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
            <img className='evidence__image' src={overview.main.image_url} alt={overview.main.image_alt} />
          </figure>
        </div>
        <Divider />
        <div className='overview__general-section'>
          {
            overview.general?.map((content, index) => {
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
      <SectionCard text={empathizing.title} items={empathizing.items} />
      <div className='case-study__section'>
        <SectionTitle text={empathizing.user_research_summary.title} />
        <FilledCard
          description={empathizing.user_research_summary.description}>
          A
        </FilledCard>
        <Divider />
        <SectionTitle text={empathizing.user_research_pain_points.title} />
        <div className='empathizing__pain-points-section'>
          {
            empathizing.user_research_pain_points?.pain_points.map((pain_point, index) => {
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
        <SectionTitle text={empathizing.user_persona.title} />
        <div className='empathizing__persona-section'>
          {
            <EmptyCard
              title={empathizing.user_persona.title}
              description={empathizing.user_persona.description} />
          }
          <figure className='evidence__container'>
            <img className='evidence__image' src={empathizing.user_persona.image_url} alt="" />
          </figure>
        </div>
        <Divider />
        <SectionTitle text={empathizing.user_journey.title} />
        <div className='empathizing__journey-section'>
          {
            <EmptyCard
              description={empathizing.user_journey.description} />
          }
          <figure className='evidence__container'>
            <img className='evidence__image' src={empathizing.user_journey.image_url} alt="" />
          </figure>
        </div>
      </div>
      <SectionCard text={designing.title} items={designing.items} />
      <div className='case-study__section'>
        <SectionTitle text={designing.paper_wireframes.title} />
        <div className='designing__wireframes-section'>
          {
            <EmptyCard
              description={designing.paper_wireframes.description} />
          }
        </div>
        <Divider />
        {
          designing.digital_wireframes?.map((wireframeInfo, index) => {
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
        <SectionTitle text={designing.low_fidelity_prototype.title} />
        <div className='designing__low-fi-section'>
          <figure>
            <img src={designing.low_fidelity_prototype.image_url} alt="" />
          </figure>
          <a
            href={designing.low_fidelity_prototype.link.url}
            target='_blank'
            className='designing__link'>
            {designing.low_fidelity_prototype.link.title}
          </a>
        </div>
        <Divider />
        <SectionTitle text={designing.usability_study_findings.title} />
        <p className='designing__description'>{designing.usability_study_findings.description}</p>
        <div className='designing__findings-section'>
          {
            designing.usability_study_findings?.findings?.map((finfing, index) => {
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
      <SectionCard text={redesigning.title} items={redesigning.items} />
      <div className='case-study__section'>
        {
          redesigning.mockups?.map((mockupInfo, index) => {
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
        <SectionTitle text={redesigning.key_mockups.title} />
        <Divider />
        <SectionTitle text={redesigning.high_fidelity_prototype.title} />
        <div className='redesigning__hi-fi-section'>
          <figure>
            <img src={redesigning.high_fidelity_prototype.image_url} alt="" />
          </figure>
          <a
            href={redesigning.high_fidelity_prototype.link.url}
            target='_blank'
            className='redesigning__link'>
            {redesigning.high_fidelity_prototype.link.title}
          </a>
        </div>
        <Divider />
        <SectionTitle text={redesigning.accessibility_considerations.title} />
        <div className='redesing__a11y-section'>
          {
            redesigning.accessibility_considerations?.considerations.map((consideration, index) => {
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