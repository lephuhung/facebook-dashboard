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
  Tooltip,
} from "antd";
import "./dashboard.css";
import axiosInstance from "../Ultils/axios";
import "./dashboard.css";
const { Title } = Typography;
const validateMessages = {
  required: "Link không được đê trống",
};
function Dashboard(props) {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reload, setReload]= useState(false);
  const [hidden, setHidden] = useState(true);
  const onFinish = (values) => {
    setLoading(true);
    axiosInstance
      .post(
        "/facebook-post",
        { url: values.Link },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        setLoading(false);
        if (res.data.status == true) {
          message.success("Upload thành công");
          setReload(!reload);
        } else {
          message.error("Upload không thành công");
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
  }, [reload]);
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
                    
                  >
                    Reset link
                  </Button>
                  <Button type="primary" htmlType="submit" loading={loading}>
                    Đăng bài
                  </Button>
                </Space>
              </Form.Item>
            </Row>
          </Form>
        </Col>
      </Row>
      <Typography.Title level={2}>10 bài viết gần đây</Typography.Title>
      <Row style={{ paddingTop: "20px", width: "100%" }} hidden={hidden}>
       
        <Col span={12} offset={6}>
          <Row gutter={[16, 16]}>
            {data.map((index, i) => {
              return (
                <Col span={8}>
                  <Card type="inner" title={index.providerName} bordered={true} key={i}>
                    <Space direction="vertical">
                      <Tooltip>{index.content!=null?index.content:'Không có nội dung'}</Tooltip>
                      <Tooltip placement="topLeft" title={index.url}>
                        <a href={index.url} target="_blank">
                          Link bài viết
                        </a>
                      </Tooltip>
                    </Space>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
