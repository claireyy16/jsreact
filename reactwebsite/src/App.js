import './index.css';
import {HiMenu} from "react-icons/hi";

function hello() {
  alert('You clicked me!');
}

function App() {
  const test = () => {
    alert("test");
  }

  return (
    <div className="App">
          <p className="text-10xl font-bold">
      Hello world!
          </p>
          <div><HiMenu/></div>
        <div>
          <button type="button" onClick={() => test()}> Hey there ! test </button>
        </div>
        <button type="button" onClick={() => hello()}>Click Me!</button>

    </div>
  );
}

export default App;
