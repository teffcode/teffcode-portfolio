import { useRoutes, BrowserRouter } from 'react-router-dom'
import { SiteProvider } from '../../Context'
import Header from '../../Components/Header'
import Home from '../../Components/Home'
import About from '../../Components/About'
import Footer from '../../Components/Footer'
import NotFound from '../../Components/NotFound'
import './index.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
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