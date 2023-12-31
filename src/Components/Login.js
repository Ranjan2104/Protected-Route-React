import React from 'react'

const Login = () => {
    const handleLogin = () => {
        localStorage.setItem("isLogin", "true")
    }
  return (
    <div>
        Login
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login