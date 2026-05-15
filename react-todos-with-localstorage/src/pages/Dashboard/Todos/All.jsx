import { Col, Row, Typography } from 'antd'
import { Link } from 'react-router-dom'

const { Title } = Typography

const All = () => {
    return (
        <div id='All' className='py-5'>
            <div className="container">
                <Row>
                    <Col span={24}>
                        <Title level={1} className='text-center'>Todos</Title>
                        <Title level={2} className='text-center'>All</Title>
                        <Link to="/dashboard/todos/add" className='btn btn-primary'>All Todos</Link>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default All