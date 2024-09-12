import './App.css'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Games from './components/Games'
import Footer from './components/Footer'
function App() {

  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <Carousel />
      <Games />
      <Footer />
    </div>
  )
}

export default App
