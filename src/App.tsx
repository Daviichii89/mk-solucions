import { Navbar } from './components/Navbar'
import { Home, Services, HowWeWork, Contact } from './views'
import { Warranty } from './views/Warranty'


function App() {

  return (
    <div className='app'>
      <Navbar />
      <Home />
      <Services />
      <Warranty />
      <HowWeWork />
      <Contact />
    </div>
  )
}

export default App
