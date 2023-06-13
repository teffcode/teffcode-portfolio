import './index.css'

const SectionCard = ({ text, items }) => {
  return (
    <div className='section-card'>
      <h2 className='section-card__title'>
        { text }
      </h2>
      <ul className='section-card__items'>
        {
          items?.map((item, index) => <li key={index} className='section-card__item'>{ item }</li>)
        }
      </ul>
    </div>
  )
}

export default SectionCard