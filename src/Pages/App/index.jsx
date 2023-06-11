import { useRoutes, BrowserRouter } from 'react-router-dom'
import { SiteProvider } from '../../Context'
import Development from '../Development'
import Header from '../../Components/Header'
import Home from '../../Components/Home'
import About from '../../Components/About'
import Footer from '../../Components/Footer'
import NotFound from '../../Components/NotFound'
import PostsContainer from '../../Components/PostsContainer'
import CoursesContainer from '../../Components/CoursesContainer'
import QuizzesContainer from '../../Components/QuizzesContainer'
import Loading from '../../Components/Loading'
import './index.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/development/blog', element: <Development><PostsContainer/></Development> },
    { path: '/development/courses', element: <Development><CoursesContainer/></Development> },
    { path: '/development/quizzes', element: <Development><QuizzesContainer/></Development> },
    { path: '/about', element: <About /> },
    { path: '/*', element: <NotFound /> }
  ])

  return routes
}

const App = () => {
  return (
    <SiteProvider>
      <BrowserRouter>
        <div className='container'>
          <Header />
          <AppRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    </SiteProvider>
  )
}

export default App