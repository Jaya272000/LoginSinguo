import React, { useState } from 'react'

const Login = () => {
    const[action,setaction]=useState('Login');
  return (
    <div className='container'>
        <div className="header">
            <h1>{action}</h1>
            <div className="underline"></div>
        </div>
        <div className="inputi">
            {action==="Login" ? <div></div>:  <div className="inputs">
                <img src="/Images/person.png" alt="Person" />
                <input type="text" name="" id="" placeholder='Name' />

            </div>}
           
            <div className="inputs">
                <img src= "/Images/email.png" alt="email" />
                <input type="Email" name="" id="" placeholder='Email'  />
                
            </div>
            <div className="inputs">

                <img src="/Images/password.png" alt="Password" />
                <input type="Password" name="" id=""  placeholder='Password'/>
                
            </div>
        </div>
        {action==='Sign Up'? <div></div>:<div className="forget-password">Lost passsword? <span>Click Here</span></div>}
    
        <div className="submit">
            <div className={action==="Login"?"sumit_Btn gray":"sumit_Btn"} onClick={()=>{setaction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"sumit_Btn gray":"sumit_Btn"} onClick={()=>{setaction("Login")}}>Login</div>

        </div> 
    </div>

  )
}

export default Login