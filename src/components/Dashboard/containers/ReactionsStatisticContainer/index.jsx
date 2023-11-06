import React from 'react';
import { Col, Row, Card } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;
import Image from 'next/image';
import ReactionsStatisticContainerStyled from './styles';

const style = {
  background: '#0092ff',
  padding: '8px 0',
};

const ReactionsStatisticContainer = () => (
  <ReactionsStatisticContainerStyled>
    <Row gutter={[15, 20]}>
      <Col xxl={{ span: 6 }} xl={{ span: 8 }} lg={{ span: 12 }}>
        <Card
          style={{
            width: 300,
          }}
        >
          <div className="card-top">
            <p>Loves</p>
            <Image
              width="30"
              height="30"
              src="https://img.icons8.com/emoji/48/red-heart.png"
              alt="red-heart"
              className="icon"
            />
          </div>
          <Title level={4}>1,930</Title>
        </Card>
      </Col>
      <Col xxl={{ span: 6 }} xl={{ span: 8 }} lg={{ span: 12 }}>
        <Card
          style={{
            width: 300,
          }}
        >
          <div className="card-top">
            <p>Likes </p>{' '}
            <Image
              width="30"
              height="30"
              src="https://img.icons8.com/emoji/48/thumbs-up.png"
              alt="thumbs-up"
              className="icon"
            />
          </div>
          <Title level={4}>1,930</Title>
        </Card>
      </Col>
      <Col xxl={{ span: 6 }} xl={{ span: 8 }} lg={{ span: 12 }}>
        <Card
          style={{
            width: 300,
          }}
        >
          <div className="card-top">
            <p>Unlikes </p>
            <Image
              width="30"
              height="30"
              src="https://img.icons8.com/emoji/48/thumbs-down-emoji.png"
              alt="thumbs-down-emoji"
              className="icon"
            />
          </div>
          <Title level={4}>1,930</Title>
        </Card>
      </Col>
      <Col xxl={{ span: 6 }} xl={{ span: 8 }} lg={{ span: 12 }}>
        <Card
          style={{
            width: 300,
          }}
        >
          <div className="card-top">
            <p>Angry </p>{' '}
            <Image
              width="30"
              height="30"
              src="https://img.icons8.com/emoji/48/angry-face-emoji--v2.png"
              alt="angry-face-emoji--v2"
              className="icon"
            />
          </div>
          <Title level={4}>1,930</Title>
        </Card>
      </Col>
      <Col xxl={{ span: 6 }} xl={{ span: 8 }} lg={{ span: 12 }}>
        <Card
          style={{
            width: 300,
          }}
        >
          <div className="card-top">
            <p>Sad </p>
            <Image
              width="30"
              height="30"
              src="https://img.icons8.com/emoji/48/slightly-frowning-face.png"
              alt="slightly-frowning-face"
              className="icon"
            />
          </div>
          <Title level={4}>1,930</Title>
        </Card>
      </Col>
    </Row>
  </ReactionsStatisticContainerStyled>
);

export default ReactionsStatisticContainer;
