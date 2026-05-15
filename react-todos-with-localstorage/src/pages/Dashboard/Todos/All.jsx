import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Space, Table, Typography } from 'antd'
import dayjs from 'dayjs'

const { Title, Text } = Typography

const All = () => {
    
    const [ todos, setTodos ] = useState([])

    const navigate = useNavigate()


    useEffect(() => {

        const todos = JSON.parse(localStorage.getItem("todos")) || []
        if (todos) { setTodos(todos)}
    },[])

    console.log('todos', todos)

     const columns = [
  { title: 'Title', dataIndex: 'title' },
  { title: 'Due Date', dataIndex: 'dueDate' },
  { title: 'Description', dataIndex: 'description' },
  { title: 'Priority', dataIndex: 'priority', render: text => <Text className='text-capitalize'>{text}</Text> },
  { title: 'Date Created', dataIndex: 'createdAt',  render: text => <Text className='text-capitalize'>{dayjs(text).format("dddd DD-MMM-YY, hh:mm:ss A")}</Text> },
  {
    title: 'Action',
    render: (_, record) => (
      <Space>
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

    return (
        <main id='All' className='py-5'>
            <div className="container">
                <div className='d-flex justify-content-between align-items-center'>
                    <Title level={1} className='text-center'>Todos</Title>
                    <Button type='primary' size='large' onClick={() => {navigate(`/dashboard/todos/add`) } } >Add Todos</Button>
                </div>
                 <Table columns={columns} dataSource={todos}  rowKey="id" />
            </div>
        </main>
    )
}

export default All