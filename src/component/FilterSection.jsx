import React from 'react'
import { useFilterContext } from '../context/filtercontext'

function FilterSection() {
      let {filter:{text}, updateHandler}  =useFilterContext()
     
  return (
     <>
     <input type='text' name='text'  value={text}  onChange={updateHandler}/>
     </>
  )
}

export default FilterSection