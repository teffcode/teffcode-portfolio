import './index.css'

const FilledCard = ({
  title,
  description,
  position = 'vertical',
  color = 'blue',
  children
}) => {
  return (
    <div className={position != 'vertical' ? `filled-card` : `filled-card filled-card__${position}` }>
      <div className={`filled-card__indicator filled-card__indicator--${color}`}>
        { children }
      </div>
      <div className='filled-card__content'>
        <h4 className={`filled-card__title filled-card__title--${color}`}>{ title }</h4>
        <p className='filled-card__description'>{ description }</p>
      </div>
    </div>
  )
}

export default FilledCard