import { Navbar } from './components/Navbar'
import { Home, Services, Warranty, Contact } from './views'


function App() {

  return (
    <div className='app'>
      <Navbar />
      <Home />
      <Services />
      <Warranty />
      {/* <HowWeWork /> */}
      <Contact />
    </div>
  )
}

export default App
