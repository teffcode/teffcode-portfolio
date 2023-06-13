import './index.css'

const SectionCard = ({ text }) => {
  return (
    <div className='section-card'>
      <h2 className='section-card__title'>
        { text }
      </h2>
    </div>
  )
}

export default SectionCard