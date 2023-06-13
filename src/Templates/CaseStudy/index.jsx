import './index.css'
import MainTitle from './Components/MainTitle'

const CaseStudy = ({ mainTitle }) => {
  return (
    <div className='case-study'>
      <MainTitle text={mainTitle} />
    </div>
  )
}

export default CaseStudy