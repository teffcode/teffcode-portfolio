import './index.css'

const FilledCard = ({
  title,
  description,
  position = 'vertical',
  color = 'blue',
	items = null,
  children
}) => {
  return (
    <div className={position != 'vertical' ? `filled-card` : `filled-card filled-card__${position}` }>
			{
				children ?
					<div className={`filled-card__indicator filled-card__indicator--${color}`}>
						{ children }
					</div>
				: null
			}
      <div className='filled-card__content'>
        {
					title ? <h4 className={`filled-card__title filled-card__title--${color}`}>{ title }</h4> : null
        }
				{
					description ? <p className='filled-card__description'>{ description }</p> : null
				}
				{
					items ?
						<ol className='filled-card__list'>
							{
								items.map((item, index) => <li key={index}>{item}</li>)
							}
						</ol>
					: null
				}
      </div>
    </div>
  )
}

export default FilledCard