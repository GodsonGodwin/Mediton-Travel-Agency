import React from 'react'

function SignUp() {
  return (
    <>
    <section className="showCase login">
      <div className='overlay'>
        <form className='form'>
          <input type="text" name="username" id="username" placeholder='User Name' required />
          <input type="email" name="email" id="email" placeholder='Your email address' required />
          <input type='password' name='password'id='password' placeholder='Your password' required/>
          <input type='password2' name='password'id='password2' placeholder='confirm your password' required/>
          <button type='submit'> Register</button>
        </form>
      </div>
    </section>
      
      
    </>
  )
}

export default SignUp