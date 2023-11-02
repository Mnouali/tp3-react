import React from 'react'

export default function Item({el,fun,index}) {
  return (
    <div >
       
          <li className="border d-flex justify-content-between align-item-center p-2 m-2">
            <div className="p-3">{el.txt}</div>
            <button className="btn btn-danger p-2 h-50" onClick={()=>fun(index)}>Supprimer</button>
          </li>
      
    </div>
  )
}
