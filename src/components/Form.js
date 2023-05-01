import React from 'react'
import '../App.css'
const Form = () => {
  return (
    <div className='logForm'>
      <h1>LogIn Form</h1>
        <form>
           <label> Email </label>
           <input type='email' placeholder='Enter your Email' required />
           
           <label> Password </label>
           <input type='password' placeholder='Enter your Password' required/>

           <button>Login</button>
        </form>
    </div>
  )
}

export default Form

