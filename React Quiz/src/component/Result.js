import React from 'react'
import { myBasket } from '../App'

function Result() {
  const {myScore} = React.useContext(myBasket)

  return (
    <div>
     <h4>The score obtained is: {myScore}</h4>
    </div>
  )
}

export default Result