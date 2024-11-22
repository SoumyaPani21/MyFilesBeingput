//import logo from './logo.svg'; className="App" <h1>Hello Everyone</h1>
import './App.css';
import { useState, createContext } from "react";
import Homepages from './component/Homepages';
import Question from './component/Question';
import Result from './component/Result';
import Timer from './component/Timer';

export const myBasket = createContext()

function App() {
  const [staging, setStage] = useState("home")
  const [ score, setScore ] = useState(0)
  return (
    <div>
      <myBasket.Provider value={{stage : setStage, myScore: score, mySetScore: setScore}}>
      {staging === "home" && <Homepages />}
      {staging === "question" && <Question><Timer/></Question>}
      {staging === "res" && <Result/>}
      </myBasket.Provider>
    </div>
  )
}

export default App;