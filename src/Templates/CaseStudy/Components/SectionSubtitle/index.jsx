import './index.css'

const SectionSubtitle = ({ color, text }) => {
  return (
    <h4 className={'section-subtitle' `section-subtitle--${color}`}>
      { text }
    </h4>
  )
}

export default SectionSubtitle