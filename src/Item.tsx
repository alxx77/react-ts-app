import React from 'react'
import "./Item.css"



function Item({message}:{message:string}) {
    return (
        <div className="item">
            {message}
        </div>
    )
}

export default Item
