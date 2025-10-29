import './App.css'
import Navbar from './components/Navbar'
import { Home, About, Projects, Contact} from './components/pages'

function App() {

  return (
    <>
      <Navbar/>
      <section>
        <Home/>
      </section>

      <section id="about">
        <About/>
      </section>
      
      <section id="projects">
        <Projects/>
      </section>

      <section id="contact">
        <Contact/>
      </section>
    </>
  )
}

export default App
