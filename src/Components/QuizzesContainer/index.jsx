import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const QuizzesContainer = () => {
  const [quizzes, setQuizzes] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/quizzes.json')
        const data = await response.json()
        setQuizzes(data)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className='quizzes'>
      <p className='quizzes__title'>In this section, you will find quizzes in English and Spanish that I have created for you to practice important concepts of HTML, CSS, and JavaScript.</p>
      <div className='quizzes__container'>
        {
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