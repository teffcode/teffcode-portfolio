import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Loading'
import './index.css'

const QuizzesContainer = () => {
  const [quizzes, setQuizzes] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/quizzes.json')
        const data = await response.json()
        setQuizzes(data)
        setLoading(false)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className='quizzes'>
      <h1 className='quizzes__title'>Quizzes</h1>
      <p className='quizzes__subtitle'>In this section, you will find quizzes in English and Spanish that I have created for you to practice important concepts of HTML, CSS, and JavaScript.</p>
      <div className='quizzes__container'>
        {
          loading ? <Loading /> :
          quizzes?.map(quiz => (
            <Link to={quiz.quiz_url} target="_blank" key={quiz.id} className='quiz__link'>
              <div className='quiz__container'>
                <p className='quiz__info'>
                  <span>{quiz.technologies}</span>
                  <span>{quiz.title}</span>
                </p>
                <p className='quiz__date'>{quiz.date}</p>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default QuizzesContainer