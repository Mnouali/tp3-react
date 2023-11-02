import React, { useState } from 'react'
import Header from './Header'
import img from"../pages/image/contactUs-dt (1).webp"
export default function Join() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [confirmPassword,setConfirmPassword]=useState("")
  const [firstName ,setFirstName ]=useState("")
  const [lastName,setLastName]=useState("")
  const[nationlaty,setNationlaty]=useState("")
  const[country,setCounrty]=useState("")
  const[mobile,setMobile]=useState("")
  const[dateBirth,setDateBirth]=useState("")
  const [data,setData]=useState([])
  const valueEmail=(e)=>{
     setEmail(e.target.value)
  }
  const valuePassword=(e)=>{
       setPassword(e.target.value)
  }
  const valueConfPass=(e)=>{
         setConfirmPassword(e.target.value)
  }
 
  const valueFirstName=(e)=>{
        setFirstName(e.target.value)
  }
  const valueLastName=(e)=>{
       setLastName(e.target.value)
  }
  const valueNationalty=(e)=>{
       setNationlaty(e.target.value)
  }
  const valueCountry=(e)=>{
          setCounrty(e.target.value)
  }
  const valueMobile=(e)=>{
           setMobile(e.target.value)
  }
  const valueDateBirth=(e)=>{
          setDateBirth(e.target.value)
  }
  const ajouter=(event)=>{
    event.preventDefault()
    const newData=[...data]
     if (password!=confirmPassword) {
      alert("Password Incorrect")
     }
     else if ( email=='' || password=="" || confirmPassword==''|| firstName=='' || lastName=='' || country=='' || mobile==''|| nationlaty==''||dateBirth=='') {
      alert("remplir les champs")
     }
     else{
      newData.push({
        email:`${email}`,password:`${password}`,confirmP:`${confirmPassword}`,
       firstName:`${firstName}`,lastName:`${lastName}`,nationlaty:`${nationlaty}`,
       country:`${nationlaty}`, country:`${country}`,
       mobile:`${mobile}`,dateBirth:`${dateBirth}`
      })
      setData(newData);
      setEmail("");setPassword("");setConfirmPassword("");setCounrty("");setDateBirth("");setFirstName("");setLastName("");setNationlaty("");setMobile('');setDateBirth('')
     }

   
   
  }
  console.log(data)
  


  return (
    <div> 
      <Header/>
      <img style={{width:"100%",height:"500px",marginTop:'60px'}} src={img}/>
      
       <div    style={{height:"900px",backgroundColor:"rgb(242, 242, 243)"}} >
          <h1 style={{fontWeight:"bold",fontStyle:"oblique",marginLeft:"40px",paddingTop:"20px"}}>Join now</h1>
          <p style={{fontStyle:"oblique",fontSize:"4",marginLeft:"40px"}}>Join NowPlease fill in the details below to complete your registration</p>
          <form className="form-group w-50  ms-5 " onSubmit={ajouter}> 
 
            <h4 style={{fontStyle:"revert-layer"}}> Login Information</h4><br/>
            <label className='from-label'>Email  <span> *</span> </label>
            <input type='email' className="form-control mt-1" value={email} onChange={(e)=>valueEmail(e)}/><br/>
            <label className='from-label'>Password  <span> *</span></label>
            <input type='password' className="form-control mt-1" value={password} onChange={(e)=>valuePassword(e)}/><br/>
            <label className='from-label' >Confirm Password <span> *</span></label>
            <input type='password' className="form-control mt-1" value={confirmPassword} onChange={(e)=>valueConfPass(e)}/>
            <hr className='text-light border-2'/>
            <h4 style={{fontStyle:"revert-layer"}}>Contact Information</h4><br/>
            
             <table style={{width:"100%"}}>
               <tbody>

               <tr>
                <td >
                  <label className='from-label '>First Name  <span> *</span> </label>
                  <input type='text' className="form-control " value={firstName} onChange={(e)=>valueFirstName(e)}/>
                </td>
                <td>
                  <label className='from-label  ms-3'>Last Name  <span> *</span> </label>
                  <input type='text' className="form-control ms-3 " value={lastName} onChange={(e)=>valueLastName(e)}/>
                </td>
              </tr>
              <tr>
                
                <td>
                  <label className='from-label  '>Nationlaty  <span> *</span> </label>
                  <input type='text' className="form-control  " value={nationlaty} onChange={(e)=>valueNationalty(e)}/>
                </td>
                <td>
                  <label className='from-label  ms-3'> Country  <span> *</span> </label>
                  <input type='text' className="form-control  ms-3" value={country} onChange={(e)=>valueCountry(e)}/>
                </td>
              </tr>
              <tr>
                 
             
              </tr>  
              <tr>
                <td>
                  <label className='from-label  '> Mobile <span> *</span> </label>
                  <input type='tel' className="form-control  " value={mobile} onChange={(e)=>valueMobile(e)} />
                </td>
                <td>
                  <label className='from-label ms-3'> Date of Birthday <span> *</span> </label>
                  <input type='date' className="form-control ms-3" value={dateBirth} onChange={(e)=>valueDateBirth(e)}/>
                </td>
              </tr>  
               </tbody>
              
                
       
             </table>
            <button type='submit'  className='btn btn-dark w-100 mt-5 ms-3'>Join Now</button>
        
          </form>
       </div>
    </div>
  )
}
