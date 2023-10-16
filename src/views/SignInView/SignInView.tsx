import React, { FormEvent, useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { authToken } from '../../graphql/client';
import {
  StyledContainer,
  WelcomeInput,
  WelcomeInputLabel,
} from '../../components/styledComponents';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, FormControl } from '@mui/material';
import SIGN_IN from '../../graphql/mutations/signIn';

const SignInView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [LogInUser, { data, error }] = useMutation(SIGN_IN);

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await LogInUser({
        variables: {
          input: {
            email,
            password,
          },
        },
      });
    } catch (e) {
      console.info(e);
    }
  };

  useEffect(() => {
    if (!error && data?.signIn.token) {
      localStorage.setItem('token', data.signIn.token);
      authToken(data.signIn.token);
    }
  }, [error, data]);

  return (
    <StyledContainer>
      <Typography>Login</Typography>
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
          Login
        </Button>
        {error && <Typography color={'red'}>{error.message}</Typography>}
      </Box>
    </StyledContainer>
  );
};

export default SignInView;
