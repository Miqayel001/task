import React from 'react';
import Card from './Card';

const Main = (props) => {
  return (
    <div>
           
           {[...props.addNewButton].map((value) => {
            return (
                <Card key = {value} value={value} addButton = {props.addNewButton} onDelete = {props.onDelete} />
            )
           })}
    </div>
  )
}

export default Main