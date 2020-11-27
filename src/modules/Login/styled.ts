import styled from 'styled-components';
import { Form, Button } from 'antd';

export const Wrapper = styled.div`
  height: 20px;
`;

export const LoginFailed = styled.p`
  text-align: right;
  color: red;
`;

export const StyledForm = styled(Form)`
  width: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
`;

export const StyledBtn = styled(Button)`
  width: 100%;
`;
