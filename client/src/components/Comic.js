import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Form, InputNumber, Image, Button, Row, Col, message } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

function Comic() {
  const [img, setImg] = useState("");
  const [num, setNum] = useState(1);
  const [alt, setAlt] = useState("");
  const [title, setTitle] = useState("");
  const [transcript, setTranscript] = useState("");
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [viewCount, setViewCount] = useState(1);
  //This is the max number of comics, will be assigned from current comic when component first mount
  const [maxNum, setMaxNum] = useState(1);

  // clean transcript string
  // const cleanText = (transcript) => {
  //   //console.log(transcript.toString());
  //   var str = transcript.toString();
  //   console.log(str);
  //   return str;
  // }

  // set state
  const setCurrentState = (comic) => {
    setImg(comic.img);
    setNum(comic.num);
    setAlt(comic.alt);
    setTitle(comic.title);
    setTranscript(comic.transcript);
    setViewCount(comic.viewCount);
    setDate(
      moment(new Date(comic.year, comic.month - 1, comic.day)).format(
        "YYYY-MM-DD"
      )
    ); //js Date(): month starts with 0
  };

  //get single image url and update state value using provided number
  const getImage = async (num) => {
    try {
      await axios
        .get(`/api/comic/${num}`)
        .then((res) => res.data)
        .then((obj) => {
          setCurrentState(obj);
        });
    } catch (error) {
      alert(error);
    }
  };

  // method for handle submit comic number request
  const handleSubmit = (e) => {
    var targetNum = e.target[0].value;
    if (targetNum < 1 || targetNum > maxNum) {
      message.warning(
        `Comic number out of range! Must be between 1 and ${maxNum}`
      );
    } else {
      getImage(targetNum).catch((err) => message.info("Comic does not exist!"));
    }
  };

  // method for random comic generator button
  const handleRandom = () => {
    var randomNum = Math.floor(Math.random() * maxNum);
    getImage(randomNum).catch((err) => message.info("Comic does not exist!"));
  };

  // method for BACK and FORWARD arrow button
  const handleBackClick = () => {
    if (num > 1) {
      getImage(num - 1).catch((err) => message.info("Comic does not exist!"));
    } else {
      message.warning("This is the FIRST comic!");
    }
  };
  const handleForwardClick = () => {
    if (num < maxNum) {
      getImage(num + 1).catch((err) => message.info("Comic does not exist!"));
    } else {
      message.warning("This is the LAST comic!");
    }
  };

  useEffect(() => {
    axios
      .get("/api/comic")
      .then((res) => res.data)
      .then((obj) => {
        setCurrentState(obj);
        setMaxNum(obj.num);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div id="comic">
      <Row>
        <Col span={2}>
          <LeftOutlined
            onClick={handleBackClick}
            style={{ fontSize: "300%" }}
          />
        </Col>
        <Col span={20}>
          <Row align="middle">
            <Col span={24}>
              <h2>{title}</h2>
            </Col>
          </Row>
          <Row align="middle">
            <Col span={24}>
              <Button type="primary" onClick={handleRandom}>
                Feeling Random
              </Button>
            </Col>
          </Row>
          <Row align="middle">
            <Col span={12}>
              <p>Date Created: {date}</p>
            </Col>
            <Col span={12}>
              <p>View Counts: {viewCount}</p>
            </Col>
          </Row>
          <Row align="middle">
            <Col span={24}>
              <Image src={img} alt={alt} />
            </Col>
          </Row>
          <Row align="middle">
            <Col span={24}>
              <p />
              {transcript}
            </Col>
          </Row>
          <Row>
            <br />
          </Row>
          <Row align="middle">
            <Col span={24}>
              <Form onSubmitCapture={handleSubmit}>
                <Form.Item>
                  <InputNumber
                    style={{ width: "20%" }}
                    placeholder="Enter Comic Number"
                  />
                  <Button type="primary" htmlType="submit">
                    Search
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>
        <Col span={2} align="middle">
          <RightOutlined
            onClick={handleForwardClick}
            style={{ fontSize: "300%" }}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Comic;
