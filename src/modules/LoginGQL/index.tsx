import { useMutation } from '@apollo/client';
import { AUTH_TOKEN, SET_TOKEN } from 'Constants';
import { LOGIN_MUTATION, SIGNUP_MUTATION } from 'graphql/mutations';
import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { ButtonText } from 'typography';
import { selectToken } from './selectors';
import {
  Title,
  LoginWrapper,
  InputsWrapper,
  ButtonsWrapper,
  Button,
  ButtonWithMr,
  Input,
  ErrMsg,
  Wrapper,
} from './styled';

export const LoginGQL: FC = () => {
  const history = useHistory();
  const loginToken = useSelector(selectToken);
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    login: true,
    email: '',
    password: '',
    name: '',
  });
  const [loginFailed, setLoginFailed] = useState(false);

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: formState.email,
      password: formState.password,
    },
    onCompleted: ({ login }) => {
      dispatch({ type: SET_TOKEN, payload: login.token });
      localStorage.setItem(AUTH_TOKEN, login.token);
      history.push('/');
    },
    onError: (error) => {
      setLoginFailed(true);
      console.error(`Error: ${error.message}`);
      setTimeout(() => setLoginFailed(false), 5000);
    },
  });

  const [signup] = useMutation(SIGNUP_MUTATION, {
    variables: {
      name: formState.name,
      email: formState.email,
      password: formState.password,
    },
    onCompleted: ({ signup }) => {
      dispatch({ type: SET_TOKEN, payload: signup.token });
      localStorage.setItem(AUTH_TOKEN, signup.token);
      history.push('/');
    },
  });

  if (loginToken) {
    return <Redirect to="/" />;
  }

  return (
    <LoginWrapper>
      <Title>{formState.login ? 'Login' : 'Sign Up'}</Title>
      <Wrapper>
        {loginFailed && <ErrMsg>Login failed try again!</ErrMsg>}
      </Wrapper>
      <InputsWrapper>
        {!formState.login && (
          <Input
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value,
              })
            }
            type="text"
            placeholder="Your name"
          />
        )}
        <Input
          value={formState.email}
          onChange={(e) =>
            setFormState({
              ...formState,
              email: e.target.value,
            })
          }
          type="text"
          placeholder="Your email address"
        />
        <Input
          value={formState.password}
          onChange={(e) =>
            setFormState({
              ...formState,
              password: e.target.value,
            })
          }
          type="password"
          placeholder="Choose a safe password"
        />
      </InputsWrapper>
      <ButtonsWrapper>
        <ButtonWithMr
          onClick={formState.login ? () => login() : () => signup()}
        >
          <ButtonText>
            {formState.login ? 'Login' : 'Create account'}
          </ButtonText>
        </ButtonWithMr>
        <Button
          onClick={() =>
            setFormState({
              ...formState,
              login: !formState.login,
            })
          }
        >
          <ButtonText>
            {formState.login
              ? 'Need to create an account?'
              : 'Already have an account?'}
          </ButtonText>
        </Button>
      </ButtonsWrapper>
    </LoginWrapper>
  );
};
