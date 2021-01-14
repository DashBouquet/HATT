import styled from 'styled-components';
import { PageTitle } from 'typography';

export const Title = styled(PageTitle)`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const LoginWrapper = styled.div`
  width: 400px;
  height: 300px;
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  user-select: none;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
  width: 100%;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const Button = styled.button`
  color: black;
  background-color: transparent;
  text-align: center;
  padding: 2px 6px 3px;
  border-width: 2px;
  border-style: outset;
  border-color: #f1c40f;
  cursor: pointer;
  width: 230px;
  white-space: nowrap;
  height: 31px;
  overflow: hidden;
`;

export const ButtonWithMr = styled(Button)`
  margin-right: 0.5rem;
  width: 130px;
  border-color: #8e44ad;
`;

export const Input = styled.input`
  width: 100%;
  padding: 3px;
  font: 'Montserrat', sans-serif;
`;

export const ErrMsg = styled.span`
  font: 'Montserrat', sans-serif;
  color: red;
`;

export const Wrapper = styled.div`
  height: 20px;
`;
