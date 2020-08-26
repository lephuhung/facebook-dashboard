import React from "react";
import { ReactTinyLink } from "react-tiny-link";
import { LinkOutlined } from "@ant-design/icons";
import { Card, Col, Row, Form, Input, Button } from "antd";
import "./dashboard.css";
import { getLinkPreview } from "link-preview-js";
import axiosInstance from "../Ultils/axios";

const validateMessages = {
  required: "'${name}' không được đê trống",
};
function Dashboard(props) {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    axiosInstance
      .post(
        "/facebook-post",
        { url: values.Link },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => console.log(res.data));
  };
  const onReset = () => {
    form.resetFields();
  };

  return (
    <div className="App">
      <h1 style={{ paddingTop: "10px" }}>
        HỆ THỐNG THEO DÕI XU HƯỚNG MẠNG XÃ HỘI
      </h1>

      <Row>
        <Col offset={6} span={12}>
          <Form
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name="Link"
              label="Link"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                style={{ width: "100%" }}
                prefix={<LinkOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
            <Row
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Form.Item style={{ padding: "10px" }}>
                <Button type="primary" htmlType="submit" onClick={onReset}>
                  Reset
                </Button>
              </Form.Item>
              <Form.Item style={{ padding: "10px" }}>
                <Button type="primary" htmlType="submit">
                  Đăng bài
                </Button>
              </Form.Item>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row gutter={16} style={{padding:'20px'}}>
          <Col span="8">
            <Card>
              <ReactTinyLink
                cardSize="small"
                showGraphic={true}
                maxLine={5}
                minLine={1}
                url="https://www.facebook.com/levu01/photos/pcb.1483526678514111/1483526611847451"
              />
            </Card>
          </Col>
          <Col span="8">
            <Card>
              <ReactTinyLink
                cardSize="small"
                showGraphic={true}
                maxLine={5}
                minLine={1}
                url="https://www.facebook.com/levu01/photos/pcb.1483526678514111/1483526611847451"
              />
            </Card>
          </Col>
          <Col span="8">
            <Card>
              <ReactTinyLink
                cardSize="small"
                showGraphic={true}
                maxLine={5}
                minLine={1}
                url="https://www.facebook.com/levu01/photos/pcb.1483526678514111/1483526611847451"
              />
            </Card>
          </Col>
          <Col span="8">
            <Card>
              <ReactTinyLink
                cardSize="small"
                showGraphic={true}
                maxLine={5}
                minLine={1}
                url="https://www.facebook.com/levu01/photos/pcb.1483526678514111/1483526611847451"
              />
            </Card>
          </Col>
          <Col span="8">
            <Card>
              <ReactTinyLink
                cardSize="small"
                showGraphic={true}
                maxLine={5}
                minLine={1}
                url="https://www.facebook.com/levu01/photos/pcb.1483526678514111/1483526611847451"
              />
            </Card>
          </Col>
          <Col span="8">
            <Card>
              <ReactTinyLink
                cardSize="small"
                showGraphic={true}
                maxLine={5}
                minLine={1}
                url="https://www.facebook.com/levu01/photos/pcb.1483526678514111/1483526611847451"
              />
            </Card>
          </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
