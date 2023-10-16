import React, { FormEvent, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import {
  StyledContainer,
  WelcomeInput,
  WelcomeInputLabel,
} from '../../components/styledComponents';
import Typography from '@mui/material/Typography';
import { Button, FormControl } from '@mui/material';
import { useMutation } from '@apollo/client';
import SIGN_UP from '../../graphql/mutations/signUp';
import { authToken } from '../../graphql/client';

const SignUpView = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createUser, { data, error }] = useMutation(SIGN_UP);

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await createUser({
        variables: {
          input: {
            email,
            name: userName,
            password,
          },
        },
      });
    } catch (e) {
      console.info(e);
    }
  };

  useEffect(() => {
    if (!error && data?.signUp.token) {
      localStorage.setItem('token', data.signUp.token);
      authToken(data.signUp.token);
    }
  }, [error, data]);

  return (
    <StyledContainer>
      <Typography>Register</Typography>
      <Box
        onSubmit={(event) => submitHandler(event)}
        component="form"
        noValidate
        sx={{
          display: 'grid',
          gridTemplateColumns: { sm: '1fr 1fr' },
          gap: 2,
        }}
      >
        <FormControl variant="standard">
          <WelcomeInputLabel shrink htmlFor="username">
            Username
          </WelcomeInputLabel>
          <WelcomeInput
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            type={'text'}
            placeholder={'Enter your name'}
            id="username"
            autoComplete={'off'}
          />
        </FormControl>

        <FormControl variant="standard">
          <WelcomeInputLabel shrink htmlFor="email">
            Email
          </WelcomeInputLabel>
          <WelcomeInput
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type={'email'}
            placeholder={'Enter your email'}
            id="email"
          />
          {error && <Typography color={'red'}>{error.message}</Typography>}
        </FormControl>

        <FormControl variant="standard">
          <WelcomeInputLabel shrink htmlFor="password">
            Password
          </WelcomeInputLabel>
          <WelcomeInput
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type={'password'}
            placeholder={'Enter your password'}
            id="password"
          />
        </FormControl>

        <Button variant={'contained'} type={'submit'}>
          Register
        </Button>
      </Box>
    </StyledContainer>
  );
};

export default SignUpView;
