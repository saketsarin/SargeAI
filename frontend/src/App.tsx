// styles
import './App.scss'

// components
import InitialGreet from './components/InitialGreet'
// import Sarge from './components/Sarge'

function App() {

  return (
    <div className="main__container">
      <InitialGreet />
      <div className="sarge__container">
        {/* <Sarge /> */}
        <span>
          🤠
        </span>
      </div>
    </div>
  )
}

export default App
