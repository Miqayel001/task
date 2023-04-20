import React, { useState } from 'react'



const Card = (props) => {
    const [addButton, setAddButton] = useState(props.addButton);

    const closeCardApp = (number) => {
        setAddButton(new Set([...addButton].filter((val) => val !== number)));
        props.onDelete(number)
     }
  return (
    <>
 

    <div  style={{margin: '0 auto', marginTop: '10px', width : "100px", height : "100px", border : "1px solid", padding : "10px"}}>
        <button style={{margin: '0 auto',  display: 'block',}} onClick={() => closeCardApp(props.value)}>
            X</button>{props.value}
        </div>
    
    </>
  )
}

export default Card