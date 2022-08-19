import React from 'react'
import './todoItem.css'

export default function TodoItem(props) {

    const {Items , deleteItem} = props;
    let length = Items.length;
    
    const listItems = length ? (
      
       
         Items.map(Tank => {
            return(
                    
        
                <div key={Tank.id}>
                    <span className='nickname'>{Tank.nickname}</span>
                    <span className='age'>{Tank.age}</span>
                    <span className='action icon' onClick={ () => deleteItem(Tank.id)}>&times;</span>
                </div>
            )
            } )
    ) : (
       
        <p>there is on item to show</p>
    )
    return (
        <div className='listItems'> 
            <div>
                <span className='nickname title'>Name</span>
                <span className='age title'>Age</span>
                <span className='action title'>Action</span>
            </div>
            <div>{listItems}</div>
                    </div>
        
    )
}
