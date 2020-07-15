import React, { useState } from "react";
import { Tabs, Row, Col, Button, Form, Input, Avatar } from "antd";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import {
  FacebookOutlined,
  SyncOutlined,
  LockOutlined,
  UserOutlined,
  MailOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
const { TabPane } = Tabs;
function Login(props) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [activekey, setactivekey] = useState("1");
  function responseFacebook(response) {
    if (response.status !== "unknown") {
      setData(response);
      setLoading(false);
      setactivekey("2");
    }
    console.log(response);
  }
  function onFinish(values) {
    console.log("Received values of form: ", values);
  }

  return (
    <Row style={{ paddingTop: "10%" }}>
      <Col span={6} offset={9}>
        <Tabs defaultActiveKey="1" centered activeKey={activekey}>
          <TabPane
            tab={
              <span>
                <FacebookOutlined />
                ĐĂNG NHẬP FACEBOOK
              </span>
            }
            key="1"
          >
            
            <FacebookLogin
              appId="564205580431684"
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook}
              render={(renderProps) => (
                <Button type="primary" onClick={renderProps.onClick}>
                  ĐĂNG NHẬP TÀI KHOẢN FACEBOOK
                </Button>
              )}
            />
          </TabPane>
          <TabPane
            tab={
              <span>
                <SyncOutlined />
               ĐĂNG NHẬP HỆ THỐNG
              </span>
            }
            key="2"
          >
            {loading ? (
              <></>
            ) : (
              <Row>
                <Col span="20" offset="2">
                  <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                      username: data.name,
                      token: data.accessToken,
                      id: data.id,
                      email: data.email,
                      remember: true,
                    }}
                    onFinish={onFinish}
                  >
                    <Form.Item>
                      <Avatar size="large" src={data.picture.data.url} />
                    </Form.Item>
                    <Form.Item
                      name="id"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Username!",
                        },
                      ]}
                    >
                      <Input
                        prefix={
                          <IdcardOutlined className="site-form-item-icon" />
                        }
                        placeholder="ID"
                      />
                    </Form.Item>
                    <Form.Item
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Username!",
                        },
                      ]}
                    >
                      <Input
                        prefix={
                          <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Username"
                      />
                    </Form.Item>
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: false,
                          message: "Please input your Username!",
                        },
                      ]}
                    >
                      <Input
                        prefix={
                          <MailOutlined className="site-form-item-icon" />
                        }
                        placeholder="email"
                      />
                    </Form.Item>
                    <Form.Item
                      name="token"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Password!",
                        },
                      ]}
                    >
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Item>
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                      >
                        ĐĂNG NHẬP
                      </Button>
                    </Form.Item>
                  </Form>
                </Col>
              </Row>
            )}
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
}

export default Login;
