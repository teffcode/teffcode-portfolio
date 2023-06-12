import './index.css'

const About = () => {
  return (
    <div className='about'>
      <h1 className='about__title'>About</h1>
      <p className='about__description'>I am currently a <b>Senior Frontend Developer</b> at La Haus (a Colombian startup) and <a href='https://platzi.com/profes/teffcode' target='_blank' className='about__link'><b>teacher for over 15 frontend development courses</b></a> at Platzi (a Colombian startup). I love engaging with the development community, which is why I organized the <b>MedellínCSS</b> community and <b>CSSConfColombia</b> for 2 years. I have also been a speaker at various communities and conferences such as <b>CSSConfEU</b>, <b>JSConfCO</b>, and <b>PlatziConf</b>. <br/> <br/> Thanks for visiting my site and feel free to <a href="mailto:teffcode@gmail.com" className='about__mailto'><b>reach out</b></a> !</p>
    </div>
  )
}

export default About