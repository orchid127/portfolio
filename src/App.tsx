import Navbar from './components/Navbar'
import { Home, About, Projects, Contact} from './components/pages'

function App() {

  return (
    <div className="bg-[#451F36]">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
      
  );
}

export default App
