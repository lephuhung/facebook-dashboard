import React from "react";
import { Tabs, Row, Col, Button, Form, Input, Avatar, Space, Select } from "antd";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { connect } from "react-redux";
import { authlogin } from "../Redux/Reducer/loginReducer";
import axiosInstance from "../Ultils/axios";
import {
  FacebookOutlined,
  SyncOutlined,
  LockOutlined,
  UserOutlined,
  MailOutlined,
  IdcardOutlined,
} from "@ant-design/icons";

const { TabPane } = Tabs;
const { Option } = Select;
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activekey: "1",
      data: {},
      loading: true,
      donvi: {},
    };
  }
  componentWillMount() {
    if (this.props.auth === true) {
      this.props.history.push("/");
    }
  }
  componentDidMount() {
    axiosInstance.get("/donvi-list").then((res) => {
      if (res.data.status === true) {
        this.setState({ donvi: res.data.data });
      }
    });
  }
  responseFacebook = (response) => {
    if (response.status !== "unknown") {
      this.setState({ data: response });
      this.setState({ loading: false });
      this.setState({ activekey: "2" });
    }
  };
  responseFacebook1= (response)=>{
    if (response.status !== "unknown") {
      this.setState({ data: response });
      this.setState({ loading: false });
      this.setState({ activekey: "3" });
      console.log(this.state.donvi);
    }
  }
  /**
   * Hàm login đăng nhập hệ thống
   * @param {giá trị của form} values 
   */
  onLogin = (values) => {
    axiosInstance.post("/login", { token: values.token }).then((res) => {
      if (res.data.status === true) {
        this.props.authlogin();
        localStorage.setItem("token", res.data.data);
        this.props.history.push("/");
      } else {
      }
    });
   
    
  };
  /**
   * Hàm đăng kí hệ thống
   * @param {giá trị form} values 
   */
  onRegister = (values) => {
    axiosInstance.post("/register", { token: values.token, id_donvi:values.id_donvi }).then((res) => {
      if (res.data.status === true) {
        this.props.authlogin();
        localStorage.setItem("token",res.data.data);
        this.props.history.push("/");
      } else {
      }
    });
  };
  render() {
    return (
      <Row style={{ paddingTop: "10%" }}>
        <Col offset={8}>
          <Tabs defaultActiveKey="1" centered activeKey={this.state.activekey}>
            <TabPane
              tab={
                <span>
                  <FacebookOutlined />
                  ĐĂNG NHẬP BẰNG FACEBOOK
                </span>
              }
              key="1"
            >
              <Space direction="vertical">
                <FacebookLogin
                  appId="564205580431684"
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={this.responseFacebook}
                  render={(renderProps) => (
                    <Button type="primary" onClick={renderProps.onClick} block>
                      ĐĂNG NHẬP BẰNG TÀI KHOẢN FACEBOOK
                    </Button>
                  )}
                />

                <FacebookLogin
                  appId="564205580431684"
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={this.responseFacebook1}
                  render={(renderProps) => (
                    <Button type="primary" onClick={renderProps.onClick} block>
                      ĐĂNG KÍ TÀI KHOẢN FACEBOOK
                    </Button>
                  )}
                />
              </Space>
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
              {this.state.loading ? (
                <h1>Loading....</h1>
              ) : (
                <Row>
                  <Col span="20" offset="2">
                    <Form
                      name="normal_login"
                      className="login-form"
                      initialValues={{
                        username: this.state.data.name,
                        token: this.state.data.accessToken,
                        id: this.state.data.id,
                        email: this.state.data.email,
                        remember: true,
                      }}
                      onFinish={this.onLogin}
                    >
                      <Form.Item>
                        <Avatar
                          size="large"
                          src={this.state.data.picture.data.url}
                        />
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
                          loading={this.state.loading}
                        >
                          ĐĂNG NHẬP
                        </Button>
                      </Form.Item>
                    </Form>
                  </Col>
                </Row>
              )}
            </TabPane>
            <TabPane
              tab={
                <span>
                  <SyncOutlined />
                  ĐĂNG KÝ HỆ THỐNG
                </span>
              }
              key="3"
            >
              {this.state.loading ? (
                <h1>Loading....</h1>
              ) : (
                <Row>
                  <Col span="20" offset="2">
                    <Form
                      name="normal_login"
                      className="login-form"
                      initialValues={{
                        username: this.state.data.name,
                        token: this.state.data.accessToken,
                        id: this.state.data.id,
                        email: this.state.data.email,
                        remember: true,
                      }}
                      onFinish={this.onRegister}
                    >
                      <Form.Item>
                        <Avatar
                          size="large"
                          src={this.state.data.picture.data.url}
                        />
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
                      <Form.Item
                        name="id_donvi"
                        label="Đơn vị"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Select
                          placeholder="Lựa chọn đơn vị"
                          onChange={this.onGenderChange}
                          allowClear
                        >
                          {this.state.donvi.map((element,i )=> {
                             return (<Option value={element.id} key={element.id}>{element.name}</Option>);
                          })
                          }
                        </Select>
                      </Form.Item>
                      <Form.Item>
                        <Button
                          type="primary"
                          htmlType="submit"
                          className="login-form-button"
                          loading={this.state.loading}
                        >
                          ĐĂNG KÝ
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
}
function mapStateToProps(state) {
  const { loginReducer } = state;
  return loginReducer;
}
const mapDispatch = { authlogin }
export default connect(mapStateToProps, mapDispatch)(Login);
