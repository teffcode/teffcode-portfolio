import './index.css'

const EmptyCard = ({
  title,
  description,
  position = 'vertical',
  color = 'blue',
  children
}) => {
  return (
    <div className={position != 'vertical' ? `empty-card` : `empty-card empty-card__${position}` }>
      {
        children ?
          <div className={`empty-card__indicator empty-card__indicator--${color}`}>
            { children }
          </div>
        : null
      }
      <div className='empty-card__content'>
        {
          title ? <h4 className={`empty-card__title empty-card__title--${color}`}>{ title }</h4> : null
        }
        <p className='empty-card__description'>{ description }</p>
      </div>
    </div>
  )
}

export default EmptyCard