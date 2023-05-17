import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Experience from './components/Experience'
import Work from './components/Work'
import Footer from './components/Footer'

function App() {
  

  return (
  <div className="App font-['sen'] bg-sky-900 min-h-screen">
    <Navbar/>
    <Header/>
    <Work/>
    <Experience/>
    <Footer/>
  </div>
  )
}

export default App
