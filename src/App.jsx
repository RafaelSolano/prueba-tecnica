import './App.css'
import { Hero } from './components/Hero'
import { AllBlogs } from './containers/AllBlogs'
import { RecentBlogs } from './containers/RecentBlogs/allBlogs'

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
