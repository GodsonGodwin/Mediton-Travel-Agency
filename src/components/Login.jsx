import React, { useState } from 'react'
import Profile from './Profile';

const Login = () => {
  const [passwordlog, setPasswordLog] = useState("");
  const [emaillog, setEmailLog] = useState ("");
  const [flag, setFlag] = useState(false)
  const [profile, setProfile] = useState(true)

  const signin = (e)=>{
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || '[]');

    const matchedUser = users.find((user)=>user.email === emaillog && user.password=== passwordlog);

    if(!emaillog || !passwordlog){
      setFlag(true)
    }

    if(matchedUser){
        const { email, name} = matchedUser;
        localStorage.setItem('email', email)
        localStorage.setItem('name', name)
        setFlag(flag);
        setProfile(!profile);
    }
    else{
      setFlag(true);
    }

  }

  return (
    <>
    {profile ? (
    <section className="showCase login">
      <div className='overlay'>
        <form className='form' onSubmit={signin}>
          <input 
          type="email" 
          name="email" id="email" 
          onChange={(e) => setEmailLog(e.target.value)}
          placeholder='Your email address' required />

          <input 
          type='password' 
          name='password'id='password' 
          onChange={(e) => setPasswordLog(e.target.value)}
          placeholder='Your password' required/>

          <button type='submit'> Log In</button>

          {flag && (<h3 style={{
            backgroundColor:'white',
            color:'red',
            margin: '25px',
            padding:'5px',
            borderRadius:'20px'

            }}>
              <i>Please fill in the correct details...</i></h3>)}

        </form>
      </div>
    </section>
    ) : (

      <Profile/>
      )}
      
      
    </>
  )
}

export default Login