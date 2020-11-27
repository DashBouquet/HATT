import React, { FC, useState } from 'react';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoginApi, selectToken } from './selectors';
import { LoginFailed, StyledBtn, StyledForm, Wrapper } from './styled';
import { SET_TOKEN } from '../../constants';

export const Login: FC = () => {
  const dispatch = useDispatch();
  const loginToken = useSelector(selectToken);
  const LoginApi = useSelector(selectLoginApi);
  const [loginFailed, setLoginFailed] = useState(false);
  const onFinish = async (values: any) => {
    const token = await LoginApi.sendLoginInfo(values);
    if (token) {
      dispatch({ type: SET_TOKEN, payload: token });
      localStorage.setItem('loginToken', token);
    } else {
      setLoginFailed(true);
      setTimeout(() => setLoginFailed(false), 5000);
    }
    console.log('Received values of form: ', values);
  };

  if (loginToken) {
    return <Redirect to="/" />;
  }

  return (
    <StyledForm
      name="normal_login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Wrapper>
        {loginFailed && <LoginFailed>Login failed try again!</LoginFailed>}
      </Wrapper>
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <StyledBtn type="primary" htmlType="submit">
          Log in
        </StyledBtn>
        Or <a href="/#">register now!</a>
      </Form.Item>
    </StyledForm>
  );
};
