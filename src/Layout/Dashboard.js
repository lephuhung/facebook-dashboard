import React from "react";
import { ReactTinyLink } from "react-tiny-link";
import { LinkOutlined } from "@ant-design/icons";
import { Card, Col, Row, Form, Input, Button, Space } from "antd";
import "./dashboard.css";
import { getLinkPreview } from "link-preview-js";
import axiosInstance from "../Ultils/axios";

const validateMessages = {
  required: "Link không được đê trống",
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
      <Row gutter={16} style={{ padding: "20px" }}></Row>
    </div>
  );
}

export default Dashboard;
