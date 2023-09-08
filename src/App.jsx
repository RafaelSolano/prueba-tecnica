import './App.css'
import { Hero } from './components/Hero'
import { AllBlogs } from './containers/AllBlogs/AllBlogs'
import { RecentBlogs } from './containers/RecentBlogs/RecentBlogs'

function App() {
 

  return (
    <>
    
    <Hero/>

    <RecentBlogs/>
     <AllBlogs/>
    </>
  )
}

export default App
