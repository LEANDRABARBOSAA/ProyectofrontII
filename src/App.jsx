
import './App.css'
import Header from './Components/Header/Header' //importación por defecto
import {Footer} from "./Components/Footer/Footer" //importación nombrada
import { Main } from './Components/Main/Main'
function App() {
  

  return (
    <div className="App">
      <Header />
      <Footer />
      <Main />

    </div>
  )
}

export default App
