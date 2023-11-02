import React from 'react'
export default function Header() {
  return (
    <div>
      <header style={{height:"60px",position:"fixed" ,top:"0px"}} className='w-100 pb-10  bg-dark text-light '>
         <li style={{position:"relative",left:"10px" ,bottom:"7px", display:'flex'}}> <p style={{fontFamily:"serif"}}className='mt-2 ms-2 font-weight-bold h4'>Inter Shipping</p></li>
      </header>
    </div>
  )
}
