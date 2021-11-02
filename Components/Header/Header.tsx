import { Button } from 'antd';
import { Row, Col, Slider } from 'antd';
const Header = () => {
    return (
        <div>
            <h1>Header</h1>
            <Button type="primary">Primary Button</Button>
            <Button type="primary" danger>
      Primary
    </Button>
    <Row>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      Col
    </Col>
    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      Col
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      Col
    </Col>
  </Row>,
        </div>
    );
};

export default Header;