import { useRoutes, BrowserRouter } from 'react-router-dom'
import { SiteProvider } from '../../Context'
import Header from '../../Components/Header'
import UxContainer from '../../Components/UxContainer'
import CaseStudyTrailersMovieApp from '../CaseStudyTrailersMovieApp'
import Home from '../../Components/Home'
import About from '../../Components/About'
import Footer from '../../Components/Footer'
import NotFound from '../../Components/NotFound'
import PostsContainer from '../../Components/PostsContainer'
import CoursesContainer from '../../Components/CoursesContainer'
import QuizzesContainer from '../../Components/QuizzesContainer'
import './index.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/ux', element: <UxContainer/> },
    { path: '/ux/case-study-trailers-movie-app', element: <CaseStudyTrailersMovieApp/> },
    { path: '/blog', element: <PostsContainer/> },
    { path: '/courses', element: <CoursesContainer/> },
    { path: '/quizzes', element: <QuizzesContainer/> },
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