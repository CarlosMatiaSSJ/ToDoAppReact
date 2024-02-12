import React from 'react'
import './CreateTodoButton.css'

function CreateTodoButton() {
  return (
    <button 
    onClick = {() => console.log('Le diste click')} 
    className='CreateTodoButton'> + </button>
  )
}

export {CreateTodoButton}
