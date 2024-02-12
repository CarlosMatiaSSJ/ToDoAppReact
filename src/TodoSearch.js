import React from 'react'
import './TodoSearch.css'
 
function TodoSearch({searchValue, setSearchValue}) {
  
  return (
    <input onChange = {
      (event) =>  {
        setSearchValue(event.target.value);
      }}
      value= {searchValue}
       className='TodoSearch' placeholder='Cortar cebolla'/>
  )
}

export  {TodoSearch}
