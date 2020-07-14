import React from "react";
import { Tabs, Row, Col, Button, Form, Input} from "antd";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import {
  FacebookOutlined,
  SyncOutlined,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { TabPane } = Tabs;
function Login(props) {
  const responseFacebook = (response) => {
    console.log(response);
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Row style={{ paddingTop: "50px" }}>
      <Col span={6} offset={9}>
        <Tabs defaultActiveKey="1" centered>
          <TabPane
            tab={
              <span>
                <FacebookOutlined />
                Facebook Login
              </span>
            }
            key="1"
          >
            <FacebookLogin
              appId="564205580431684"
              autoLoad={true}
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
                System Login
              </span>
            }
            key="2"
          >
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
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
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
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
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
}

export default Login;
