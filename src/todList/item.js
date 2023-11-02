import React from 'react'

export default function Item({element,fun}) {
  return (
    <div key={element.id}>
       
          <li className="border d-flex justify-content-between align-item-center p-2 m-2">
            <div className="p-3">{element.txt}</div>
            <button className="btn btn-danger p-2 h-50" onClick={()=>fun(element.id)}>Supprimer</button>
          </li>
      
    </div>
  )
}
