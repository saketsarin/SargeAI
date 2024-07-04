// styles
import "./App.scss";

// components
import InitialGreet from "./components/InitialGreet";
import TodoContainer from "./components/TodoContainer";
// import Sarge from './components/Sarge'

// constants
import { sampleTodos } from "./constants/todoItems";

function App() {
  return (
    <div className="main__container">
      <InitialGreet />

      <TodoContainer todos={sampleTodos} />
      <div className="sarge__container">
        {/* <Sarge /> */}
        <span>🤠</span>
      </div>
    </div>
  );
}

export default App;
