import React from 'react'
import logo from '../pages/image/OIP.jpg'

import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'

export default function Navabr() {
  return (
    <div>
       <nav style={{height:"60px"}} className='w-100 pb-10 d-flex justify-content-between bg-dark text-light '>
       
       <li style={{position:"relative",left:"10px" ,bottom:"7px", display:'flex'}}><img style={{width:"40px",height:"40px",borderRadius:"20px"}}src={logo}/> <p style={{fontFamily:"serif"}}className='mt-2 ms-2 font-weight-bold h4'>Inter Shipping</p></li>
       <ul style={{marginRight:"30px"}} className='d-flex justify-content-end  '>
           <Link className='text-decoration-none text-light'><li className='li'>Entreprise</li></Link>
           <Link className='text-decoration-none text-light'><li className='li'>Route & Port Finder</li></Link>
           <Link className='text-decoration-none text-light'><li className='li'>Destination</li></Link>
           <Link className='text-decoration-none text-light'><li className='li'>Help</li></Link>
           <Link className='text-decoration-none text-light'><li className='li'>Login</li></Link>
           <Link className='text-decoration-none text-light'to={"/join"}><li className='li'>Join</li></Link>
       </ul>
     </nav>
    </div>
  )
}
