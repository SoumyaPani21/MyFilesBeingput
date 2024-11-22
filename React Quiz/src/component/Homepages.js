import React from 'react'
import { useContext } from 'react'
import { myBasket } from '../App'
function Homepages() {
     const {stage} = useContext(myBasket)

     function goToQuestion()
     {
          // setStage{"question"} props.
          stage("question")
     }
  return (
    <div>
     <button id="starting" onClick={goToQuestion}>Start  Quiz!.</button>
     <p>All the best!!.</p>
    </div>
  )
}

export default Homepages