import React, { useState } from 'react'

const Header = (props) => {

   
    
  return (
    <>
    <div style={{border : '1px solid', padding : '25px'}}>
     <button onClick={props.onAdd}>ADD CARD</button>
     <button onClick={props.onSort}>SORT CARD</button>

     </div>
     </>
  )
}

export default Header