
import { createContext, useContext, useState } from 'react';


function C4(){
  const [va,va2] = useContext(Env);

  return(
    <div>
        <p>hi{va}{va2}</p>
    </div>
  )
}
const Env = createContext();

function App() {
  const [set,setShow]= useState("Lubna");
  const [set2,setShow2]= useState("Tahreem");
  return (
   <Env.Provider value={[set,set2]}>
    <div className="App">
      <h1>Hello {set}{set2}</h1>
      <C4></C4>
    </div>
    </Env.Provider>
  );
}

export default App;
