import React, { useState } from 'react'

const LoginSignup = () => {

  const[state, setState] = useState("Sign Up");
  const[formData, setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const login = async ()=>{
      console.log("Log in function executed",formData);
      let responseData;
      await fetch('http://localhost:4000/login',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formData),
      }).then((res) => res.json()).then((data) => responseData = data);

      if(responseData.success){
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/");
      }
      else{
        alert(responseData.errors);
      }
  }

  const signup = async () => {
      console.log("signup function executed",formData);
      let responseData;
      await fetch('http://localhost:4000/signup',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formData),
      }).then((res) => res.json()).then((data) => responseData = data);

      if(responseData.success){
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/");
      }
      else{
        alert(responseData.errors);
      }
  }



  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});


  }
  return (
    <div className='loginsignup w-[100%] h-[80vh] bg-[#fce3fe] pt-[100px]'>
      <div className="loginsignup-container w-[580px] h-[600px] bg-white m-auto px-[60px] py-[40px]">
        <h1 className='my-[20px] mx-[0px]'>{state}</h1>
        <div className="loginsignup-fields flex flex-col gap-[29px] mt-[30px]">
       
        {state==="Sign Up"?<input type="text" name='username' value={formData.username} onChange={changeHandler} placeholder='Your name' className='h-[72px] w-[100%] pl-[20px] border border-#c9c9c9 outline-none text-[#5cc5c5] text-[18px]'/>:<div></div>}
          <input type='email' name='email' value={formData.email} onChange={changeHandler} placeholder='Email address' className='h-[72px] w-[100%] pl-[20px] border border-#c9c9c9 outline-none text-[#5cc5c5] text-[18px]'/>
          <input type='password' name='password' value={formData.password} onChange={changeHandler} placeholder='password' className='h-[72px] w-[100%] pl-[20px] border border-#c9c9c9 outline-none text-[#5cc5c5] text-[18px]'/>
        </div>

        <button className='w-[460px] h-[72px] text-white bg-[#ff4141] mt-[30px] border-none text-[24px] font-medium cursor-pointer' onClick={() => {state === "Log in"? login(): signup()}}>Continue</button>
       {state==="Sign Up"
       ?<p className='loginsignup-login mt-[200px] text-[#5c5c5c] text-[18px] font-medium z-40 ' >Already have an account?<span className='text-[#ff4141] font-[600] z-40' onClick={() => {setState("Log in")}}>Log in here</span></p>
       :<p className='loginsignup-login mt-[20px] text-[#5c5c5c] text-[18px] font-medium'>Create an Account?<span className='text-[#ff4141] font-[600]' onClick={() => {setState("Sign Up")}}>Click here</span></p>} 
        
        <div className="oginsignup-Agree flex items-center mt-[25px] gap-[20px] text-[#5c5c5c] text-[18px] font-medium ">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, i agree to the terms of use and privacy policy</p>
        </div>l
      </div>
    </div>
  )
}

export default LoginSignup
