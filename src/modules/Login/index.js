import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom"
const Login = ({ token, setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

const loginHandler = () => {
  setError('');
  setPassword('');
  setUsername('');
axios({
  url:'https://fakestoreapi.com/auth/login',
  method:'POST',
  data:{
    username: username,
    password: password
  }
}).then(res=> {
  console.log(res.data.token);
setToken(res.data.token)
localStorage.setItem('userToken', res.data.token);
navigate('/products')
}).catch(err=>{
  console.log(err.response)
  setError(error.response)
})
}

  return (
    <div className="login">
      <div>
        <input 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
        />
        <input 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        {error && <small>{error}</small>}
        <button onClick={loginHandler}>Login</button>
      </div>
    </div>
  );
};

export default Login;
