import React from 'react'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import { useFilterContext } from '../context/filtercontext'

function Sort() {
  let active = {
    backgroundColor: "black",
    color: 'white'
  }
  let { grid_view, setListView, setGridView, filter_products } = useFilterContext()
  console.log(grid_view)
  return (
    <div className='row justify-content-between m-4'>
      <div className='col ' >
        <button style={grid_view ? active : null}
          onClick={setGridView}><BsFillGridFill /></button>
        <button className="ms-3" style={!grid_view ? active : null}
          onClick={setListView}> <BsList /></button>
      </div>
      <div className='col' >
        <p><b>{filter_products.length}</b> Products Available</p>
      </div>
      <div className='col'>
        selecte box
      </div>
    </div>
  )
}

export default Sort