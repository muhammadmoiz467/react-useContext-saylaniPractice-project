import { useAuth } from '@/context/Auth'
import { Button, DatePicker, Form, Input, Select, Typography } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const { Title } = Typography
const { Item } = Form
const { Option } = Select

let initialState = { title: "", dueDate: "", description: "", priority: "" }

const Add = () => {
    const { user } = useAuth()
    const [state, setState] = useState(initialState)
    const [isProcessing, setIsProcessing] = useState(false)
    const navigate = useNavigate()


    const handleChange = (e) => setState(s => ({ ...s, [e.target.name]: e.target.value }))

    const handleSubmit = () => {
        let { title, dueDate, description, priority } = state

        title = title.trim()
        if (title < 3) { return window.toastify("Please enter title", "error") }
        if (!dueDate) { return window.toastify("Please enter due date", "error") }
        if (!description) { return window.toastify("Please enter description", "error") }
        if (!priority) { return window.toastify("Please enter priority", "error") }

        const todo = { title, dueDate, description, priority }
        todo.uid = user.uid
        todo.id = window.getRandomId()
        todo.status = "active"
        todo.todoCompleted = false
        todo.createdAt = new Date().getTime()


        setIsProcessing(true)

        const todos = JSON.parse(localStorage.getItem("todos")) || []
        todos.push(todo)
        localStorage.setItem("todos", JSON.stringify(todos))

        setTimeout(() => {
            setIsProcessing(false)
            window.toastify("A new user has been successfully created", "success")
            navigate("/dashboard/todos")
        }, 500);
        // console.log('state', state)
        // console.log('todos', todos)

    }

    return (
        <main className='auth flex-center'>
            <div className='container'>
                <div className='card p-4 mx-auto'>
                    <div className='d-flex align-itmes-center justify-content-between py-4'>
                        <Title level={2} className='mb-0'>Add Todo</Title>
                        <Button type='primary' onClick={() => { navigate("/dashboard/todos") }}>Todos</Button>
                    </div>
                    <Form layout='vertical'>
                        <Item label="Title" required>
                            <Input type="title" size='large' placeholder="Enter title" name="title" onChange={handleChange} />
                        </Item>
                        <Item label="Due-Date">
                            <DatePicker size='large' placeholder="Enter due date" name="title" className='w-100' onChange={(obj, dueDate) => { setState(s => ({ ...s, dueDate })) }} />
                        </Item>
                        <Item label="Description">
                            <Input.TextArea size='large' placeholder="Enter description" name="description" style={{ height: 100, resize: 'none' }} onChange={handleChange} />
                        </Item>
                        <Item label="Priority">
                            <Select size='large' placeholder="Please select priority" onChange={(priority) => { setState(s => ({ ...s, priority })) }} >
                                <Option value="low">Low</Option>
                                <Option value="medium">Mediun</Option>
                                <Option value="high">High</Option>
                            </Select>
                        </Item>
                        <Button type='primary' size='large' block htmlType='submit' loading={isProcessing} onClick={handleSubmit}>Add Todo</Button>
                    </Form>
                </div>
            </div>
        </main>
    )
}

export default Add