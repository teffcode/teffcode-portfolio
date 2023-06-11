import { NavLink } from 'react-router-dom'
import './index.css'

const Development = ({ children }) => {
  return (
    <div className='development'>
      <div className='routing'>
        <NavLink to='/development/blog' className={({ isActive }) => isActive ? 'routing__label--active' : 'routing__label'}>
          Blog
        </NavLink>
        <NavLink to='/development/courses' className={({ isActive }) => isActive ? 'routing__label--active' : 'routing__label'}>
          Courses
        </NavLink>
        <NavLink to='/development/quizzes' className={({ isActive }) => isActive ? 'routing__label--active' : 'routing__label'}>
          Quizzes
        </NavLink>
      </div>
      { children }
    </div>
  )
}

export default Development