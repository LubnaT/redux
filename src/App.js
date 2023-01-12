import { useSelector } from "react-redux";


function App() {
  const {counter} = useSelector(store => store)

  const increment =()=>{

  }
  return (
        <div>
          <h1>{counter}</h1>
          <button onClick={increment}>Increment</button>
        </div>
  );
}

export default App;
