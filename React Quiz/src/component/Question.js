import React from 'react'
import { myBasket } from '../App'
import Timer from './Timer'

const quesData = [
     {
          title: "What is the colour of mango fruit?",
          A: "Blue",
          B: "Yellow",
          C: "Grey",
          D: "Red",
          Answer: "B"  //"Yellow"
     },
     {
          title: "What percentage is the amount of water present in our planet earth?",
          A: 25,
          B: 33.33,
          C: 75,
          D: 100,
          Answer: "C"  //75
     },
     {
          title: "How to become a cool person?",
          A: "By controlling anger",
          B: "By sleeping inside refrigerator",
          C: "By putting ice upon yourself",
          D: "On drinking cold drinks",
          Answer: "A" //"By controlling anger"
     },
     {
          title: "Generally sunlight gives which vitamin?",
          A: "Vitamin B",
          B: "Vitamin C",
          C: "Vitamin D",
          D: "Vitamin E",
          Answer: "C"  //"Vitamin D"
     }
]
function Question(props) {
     // const { stage } = React.useContext(myBasket)
    const [ quesIndex, setQuesIndex] = React.useState(0)
    const{stage, myScore, mySetScore} = React.useContext(myBasket)
//    const [ score, setScore ] = React.useState(0)
    const [ansStatus, setAnsStatus] = React.useState(false)
    function goToNextQuest() {
     if(ansStatus == true){
          setAnsStatus(false)
          setQuesIndex(quesIndex+1)
     }
     else
     {
          alert("Please select an option")
     }
    }
    function goToPrevQuest() {
     setQuesIndex(quesIndex-1)
    }
    function collectedAns(selecAns) {
     // console.log(selecAns)
     if(quesData[quesIndex].Answer == selecAns){
          //the answer is correct
          // setScore(score+1)
          mySetScore(myScore+1)
     }
     else{
          if(myScore < 0)
          {myScore = 0}
          else{ mySetScore(myScore-1) }
     }
     setAnsStatus(true)
    }
    function goToResult() {
     // setStage("res")
     if (ansStatus) {
          setAnsStatus(false)
          stage("res")
     }
     else{
          alert("Kindly select an option.")
     }
    }
  return (
    <div id="questContain">
     {props.children}
          <h2>{quesData[quesIndex].title}</h2>
          <button onClick={function(){collectedAns("A")}}>{quesData[quesIndex].A}</button>
          <button onClick={function(){collectedAns("B")}}>{quesData[quesIndex].B}</button>
          <button onClick={function(){collectedAns("C")}}>{quesData[quesIndex].C}</button>
          <button onClick={function(){collectedAns("D")}}>{quesData[quesIndex].D}</button> <br/> <br/>
          {/* <button onClick={goToPrevQuest}>Previous</button> */}
          {/* <button onClick={goToNextQuest}>Next</button> */}
          {quesIndex === 0 ? <button id="prev" type="button" disabled aria-disabled="true">Previous</button> : <button id="prev" onClick={goToPrevQuest}>Previous</button>}
          {quesIndex === quesData.length-1 ? <button id="subm" onClick={goToResult}>Submit</button> : <button id="nxt" onClick={goToNextQuest}>Next</button>}
    </div>
  )
}

export default Question