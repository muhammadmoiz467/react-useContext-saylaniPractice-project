// import { useAuth } from '@/context/Auth'
import { useAuth } from '@/context/Auth'
import { Button, Form, Input, Typography } from 'antd'
import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const { Title, Paragraph } = Typography
const { Item } = Form

const initialState = { email: "", password: "" }

const Login = () => {
  const { dispatch } = useAuth()

  const [ isProcessing, setIsProcessing] = useState(false)
  const [state, setState] = useState(initialState)
  const navigate = useNavigate()

  const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))

  const handleLogin = () => {
    let { email, password } = state

  
    setIsProcessing(true)
    const users = JSON.parse(localStorage.getItem("users")) || []
  

    let user = users.find(u => u.email === email && u.password === password)

    console.log('user', user)
   if (!user) { 
     setIsProcessing(false)
     return window.toastify("Invalid email or password", "error")
   }

   localStorage.setItem("user", JSON.stringify(user))

   dispatch({
    type: "SET_LOGIN",
    payload: { user }
   })
   
   setTimeout(() => {
     setIsProcessing(false)
      window.toastify("Login sucessfully", "success")
      navigate("/") 
    }, 500);

    // console.log('window.isValidEmail(email)', window.isValidEmail(email))
  }

  return (
    <main className='auth flex-center'>
      <div className='container'>
        <div className='card p-3 p-4 mx-auto'>
          <Title level={1} className='text-center'>Login</Title>
          <Paragraph className="text-center" >Already have an account? <Link to="/auth/register">Register</Link></Paragraph>

          <Form layout='vertical'>
            <Item label="Email" required>
              <Input type="email" size='large' placeholder="Enter your email" name="email" onChange={handleChange} />
            </Item>
            <Item label="Password" required>
              <Input.Password size='large' placeholder="Enter your password" name="password" onChange={handleChange} />
            </Item>
            <Button type='primary' size='large' block htmlType='submit' loading={isProcessing} onClick={handleLogin}>Login</Button>
          </Form>
        </div>
      </div>
    </main>
  )
}

export default Login