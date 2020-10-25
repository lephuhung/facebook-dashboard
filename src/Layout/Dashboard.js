import React, { useState, useEffect } from "react";
import { LinkOutlined } from "@ant-design/icons";
import {
  Col,
  Row,
  Form,
  Input,
  Button,
  Space,
  Typography,
  message,
  Card,
} from "antd";
import "./dashboard.css";
import axiosInstance from "../Ultils/axios";
import "./dashboard.css";
const { Text, Title } = Typography;
const validateMessages = {
  required: "Link không được đê trống",
};
function Dashboard(props) {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [hidden, setHidden] = useState(true);
  const onFinish = (values) => {
    axiosInstance
      .post(
        "/facebook-post",
        { url: values.Link },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        if (res.data.status == true) {
        } else {
          message.error(" Upload khong thafnh coong");
        }
      });
  };
  const onReset = () => {
    form.resetFields();
  };
  useEffect(() => {
    axiosInstance
      .get("/top10posts", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        if (res.data.status == true) {
          //console.log(res.data.data)
          setData(res.data.data);
          setHidden(false);
        } else {
          message.error("Truy vấn dữ liệu không thành công");
        }
      });
  }, []);
  return (
    <div className="App">
      <Title strong>HỆ THỐNG THEO DÕI XU HƯỚNG MẠNG XÃ HỘI</Title>

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
                <Space>
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={onReset}
                    block
                  >
                    Reset
                  </Button>
                  <Button type="primary" htmlType="submit" block>
                    Đăng bài
                  </Button>
                </Space>
              </Form.Item>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row
        gutter={[16, 16]}
        style={{ padding: "20px", width: "100%" }}
        hidden={hidden}
      >
        {data.map((index) => {
          return (
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                {index.url}
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Dashboard;
