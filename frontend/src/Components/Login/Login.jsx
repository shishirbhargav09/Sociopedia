import { Typography } from '@mui/material'
import React from 'react'
import './Login.css'
function Login() {
  return (
    <div className='login'>
        <form className='loginForm'>
<Typography variant="h3" style={{padding:"2vmax"}} />
            <input type="email" />
            <input type="password" />
        </form>
    </div>
  )
}

export default Login 