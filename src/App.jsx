import { useState } from "react";
import userStore from "./store";
import Add from "./components/add";
import Frameworks from "./components/frameworks";
import Solders from "./components/solders";
import Eggs from "./components/eggs";
import Books from "./components/books";


function App(){
  const title = userStore(state => state.goal)

  return (
    <div className="main">
      <h1>{title}</h1>
      <Books/>
      {/* <Eggs /> */}
      {/* <Solders /> */}
      {/* <h1>{title}</h1>
      <hr></hr>
      <Add />
      <br></br>
      <Frameworks /> */}
    </div>
  )
}

export default App;