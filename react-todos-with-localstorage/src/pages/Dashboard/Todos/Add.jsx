// import { useAuth } from '@/context/Auth'
import { Button, DatePicker, Form, Input, Select, Typography } from 'antd'
// import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const { Title, Paragraph } = Typography
const { Item } = Form
const { Option } = Select

const Add = () => {

    const navigate = useNavigate()

    return (
        <main className='auth flex-center'>
            <div className='container'>
                <div className='card p-4 mx-auto'>
                    <div className='d-flex align-itmes-center justify-content-between py-4'> 
                    <Title level={2} className='mb-0'>Add Todo</Title>
                    <Button type='primary' onClick={() => {navigate("/dashboard/todos")}}>Todos</Button>
                    </div>
                    <Form layout='vertical'>
                        <Item label="Title" required>
                            <Input type="title" size='large' placeholder="Enter title" name="title" />
                        </Item>
                        <Item label="Due-Date">
                            <DatePicker size='large' placeholder="Enter due date" name="title" className='w-100'/>
                        </Item>
                        <Item label="Description">
                            <Input.TextArea size='large' placeholder="Enter description" name="description" style={{height: 100, resize: 'none'}}/>
                        </Item>
                        <Item label="Priority">
                            <Select size='large' placeholder="Please select priority">
                                <Option value="low">Low</Option>
                                <Option value="medium">Mediun</Option>
                                <Option value="high">High</Option>
                            </Select>
                        </Item>
                        <Button type='primary' size='large' block htmlType='submit'>Add Todo</Button>
                    </Form>
                </div>
            </div>
        </main>
    )
}

export default Add