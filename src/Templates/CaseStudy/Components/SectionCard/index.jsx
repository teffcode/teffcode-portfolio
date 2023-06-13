import './index.css'

const SectionCard = ({ text, items }) => {
  console.log('ITEMS: ', items)
  return (
    <div className='section-card'>
      <h2 className='section-card__title'>
        { text }
      </h2>
      <ul className='section-card__items'>
        {
          items?.map(item => <li className='section-card__item'>{ item }</li>)
        }
      </ul>
    </div>
  )
}

export default SectionCard