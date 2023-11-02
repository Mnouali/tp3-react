import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid" 
import Item from './item'
export default function Form() {
  
  
  const [data,setData]=useState([
  
  ])
  const [val,setVal]=useState("")
  const changeVal=(e)=>{
   setVal(e)
  }
   const ajouter=()=>{
    
     if (val.length==0) {
        alert("enter les donnes valide")
     }
     else{
      const newData=[...data]
      newData.push({txt:`${val}`,id:`${uuidv4()}`})
      setData(newData)
      setVal("")
     }
   }
    const Delete=(index)=>{
 
        data.splice(index,1)
        const newTable=[...data]
        setData(newTable)
    }
    console.log(data)
  return (

    
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
  
      <label className='form-label mt-3'>Chose à faire</label>
      <div style={{display:"flex"}}>
      <input type='text' className='form-control' value={val} onChange={(e)=>changeVal(e.target.value)}  />
      <button className='btn btn-primary ms-2' onClick={ajouter}>Envoyer</button> 

      </div>
      <br/><br/><br/>
      {data.map((element,index)=>{
        return(
           <Item key={element.id} fun={Delete} el={element} index={index}/>
        )
      })}
      
    </div>
  )
}
 