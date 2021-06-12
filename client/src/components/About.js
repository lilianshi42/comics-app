import React from "react";
import { Button, Row, Col } from "antd";
import {
  ArrowLeftOutlined,
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";

function About(props) {
  return (
    <div>
      <Row align="middle">
        <Col span={24}>
          <h1>About Us</h1>
        </Col>
      </Row>
      <Row align="middle">
        <Col span={4}></Col>
        <Col span={16}>
          <h4>
            Cyber City Comics is one of the fastest-growing comic book stores in
            downtown Toronto since the 1990s. The global digital revolution has
            inspired us to offer this online comic platform to our customers. We
            hope you can enjoy the services we offer you both online and
            offline.
          </h4>
        </Col>
        <Col span={4}></Col>
      </Row>
      <Row>
        <br />
        <br />
        <br />
      </Row>
      <Row align="middle">
        <Col span={4}></Col>
        <Col span={8} style={{ textAlign: "left" }}>
          <p>
            Store Address: 123 Lake Shore Ave, Toronto ON
            <br />
            Contact Number: +1-888-512-8422
            <br />
            Email Us: cybercitycomics@email.com
          </p>
        </Col>
        <Col span={4}></Col>
        <Col span={8}>
          <Row>
            <p>Follow Us On:</p>
          </Row>
          <Row>
            <Button type="link" href="https://www.instagram.com/" target="_blank">
              <InstagramOutlined style={{ fontSize: "200%" }} />
            </Button>
            <Button type="link" href="https://www.facebook.com/" target="_blank">
              <FacebookOutlined style={{ fontSize: "200%" }} />
            </Button>
            <Button type="link" href="https://twitter.com/" target="_blank">
              <TwitterOutlined style={{ fontSize: "200%" }} />
            </Button>
          </Row>
        </Col>
      </Row>
      <Row>
        <br />
        <br />
      </Row>
      <Row align="middle">
        <Col span={24}>
          <Button
            type="primary"
            size="large"
            shape="round"
            onClick={() => {
              props.history.goBack();
            }}
          >
            <ArrowLeftOutlined />
            Back
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default About;
