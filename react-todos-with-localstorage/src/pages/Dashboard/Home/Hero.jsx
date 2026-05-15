import { Col, Row, Space, Typography } from 'antd'
import { Link } from 'react-router-dom'
// import { useAuth } from '@/context/Auth'

const { Title } = Typography

const Hero = () => {
    // const {user} = useAuth()
    return (
        <div className='py-5'>
            <div className="container">
                <Row>
                    <Col span={24} className='text-center'>
                       <Title>Dashboard - Page</Title>
                       <Title>Home - Hero</Title>
                       {/* <Title level={2} className='text-center'>UID: {user.uid}</Title>
                       <Title level={2} className='text-center'>Name: {user.name}</Title>
                       <Title level={2} className='text-center'>Email: {user.email}</Title> */}
                       <Space>
                        <Link to="/" className='btn btn-primary'>Frontend</Link>
                        <Link to="/todos" className='btn btn-primary'>Todos</Link>
                       </Space>
                    </Col>
                </Row> 
            </div>
        </div>
    )
}

export default Hero