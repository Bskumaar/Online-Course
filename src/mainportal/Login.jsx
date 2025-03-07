
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/portal/Login.css";
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
   
    const validUsername = "suresh";
    const validPassword = "123456";

    if (username === validUsername && password === validPassword) {

      navigate('/portal');
    } else {
      alert("Invalid Username or Password ❌");
    }
  };
  return (
    <div>
      <div className='loginpage'>

        <h1 className='text-center mt-2'>Great Tech</h1>

        <div className='logininput'>
          <input 
          type="text" placeholder='User Name'
          value={username}
          onChange={(e) => setUsername(e.target.value)} />
          <input 
          type="password" 
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
          <p className='loginforget'>Forget Password?</p>
          <button className='btn loginbtn btn-success' onClick={handleLogin}>Login</button>
        </div>
      </div>

    </div>
  )
}

export default Login
