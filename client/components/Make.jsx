import React, { useEffect, useState } from 'react'
import { getBubbleTea } from '../apis/bubble_tea'



const Make = () => {

  const [bubbleTea, setBubbleTea] = useState([])

  const populateBubbleTea = () => {
    getBubbleTea()
      .then(tea => {
        setBubbleTea(tea)
      })
  }

  useEffect(() => {
    populateBubbleTea()
  }, [])

  return (
    <>
      <div className='app'>
        <h1>This will be bubble tea!</h1>
        <ul>
          {bubbleTea.map(tea => (
            <li key={tea.id}>{tea.drink_name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}


export default Make



// MAKE SOMETHING ABOUT SUBMITTING OWN FLAVOURS FOR REVIEW
