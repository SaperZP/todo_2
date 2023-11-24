import React, { FormEvent, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import {
  StyledContainer,
  WelcomeInput,
  WelcomeInputLabel,
} from '../../components/styledComponents';
import Typography from '@mui/material/Typography';
import {
  Button,
  ButtonBase,
  Divider,
  FormControl,
  useTheme,
} from '@mui/material';
import { useMutation } from '@apollo/client';
import SIGN_UP from '../../graphql/mutations/signUp';
import { authToken } from '../../graphql/client';
import { signUpViewStyles } from './styles';
import CustomButton from '../../components/CustomButton';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ChevronLeftIcon } from '../../assets/icons/chevronLeft.svg';
import { ReactComponent as GoogleIcon } from '../../assets/icons/google-icon.svg';
import { ReactComponent as AppleIcon } from '../../assets/icons/apple-icon.svg';
import useValidate, { ValidationResult } from '../../hooks/useValidate';
import { FieldsType } from './types';

const validationRules = {
  name: /^(?=.*[A-Za-z0-9!@#$%^&*()_+{}|:"<>?[\]]).{2,15}$/,
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  password:
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/,
};

const SignUpView = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [createUser, { data, error }] = useMutation(SIGN_UP);

  const [fields, setFields] = useState<FieldsType>({
    name: '',
    email: '',
    password: '',
  });

  const { fieldsValidationStatus, flush } = useValidate(
    fields,
    validationRules,
    1
  );

  const isAllFieldsValid = (input: ValidationResult<Record<string, string>>) =>
    !Object.values(input).some((value) => typeof value === 'string' || !value);

  const setFieldsHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: keyof FieldsType
  ) =>
    setFields((prevState) => ({
      ...prevState,
      [fieldName]: event.target.value,
    }));

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();

    if (isAllFieldsValid(flush())) {
      try {
        await createUser({
          variables: {
            input: {
              email: fields.email,
              name: fields.name,
              password: fields.password,
            },
          },
        });
      } catch (e) {
        console.info(e);
      }
    }
  };

  useEffect(() => {
    if (!error && data?.signUp.token) {
      localStorage.setItem('token', data.signUp.token);
      authToken(data.signUp.token);
    }
  }, [error, data]);

  return (
    <StyledContainer sx={signUpViewStyles.container}>
      <CustomButton
        muiButtonProps={{ sx: signUpViewStyles.backButton }}
        icon={ChevronLeftIcon}
        iconColor={theme.palette.project_color_white.main}
        iconSize={24}
        onClick={() => navigate('/')}
      />

      <Typography variant={'h1'} sx={signUpViewStyles.title}>
        Register
      </Typography>

      <Box
        component="form"
        noValidate
        sx={signUpViewStyles.form}
        onSubmit={(event) => submitHandler(event)}
      >
        <FormControl error={!fieldsValidationStatus.name} variant="standard">
          <WelcomeInputLabel shrink htmlFor="username">
            Username
          </WelcomeInputLabel>
          <WelcomeInput
            value={fields.name}
            onChange={(event) => setFieldsHandler(event, 'name')}
            type={'text'}
            placeholder={'Enter your name'}
            id="username"
            autoComplete={'off'}
          />
        </FormControl>

        <FormControl error={!fieldsValidationStatus.email} variant="standard">
          <WelcomeInputLabel shrink htmlFor="email">
            Email
          </WelcomeInputLabel>
          <WelcomeInput
            value={fields.email}
            onChange={(event) => setFieldsHandler(event, 'email')}
            type={'email'}
            placeholder={'Enter your email'}
            id="email"
            autoComplete={'off'}
          />
          {error && <Typography color={'red'}>{error.message}</Typography>}
        </FormControl>

        <FormControl
          error={!fieldsValidationStatus.password}
          variant="standard"
        >
          <WelcomeInputLabel shrink htmlFor="password">
            Password
          </WelcomeInputLabel>
          <WelcomeInput
            value={fields.password}
            onChange={(event) => setFieldsHandler(event, 'password')}
            type={'password'}
            placeholder={'Enter your password'}
            id="password"
            autoComplete={'off'}
          />
        </FormControl>

        <Button
          disabled={!isAllFieldsValid(fieldsValidationStatus)}
          sx={signUpViewStyles.submitButton}
          variant={'contained'}
          type={'submit'}
        >
          Register
        </Button>
      </Box>

      <Divider sx={signUpViewStyles.divider}>or</Divider>

      <Box sx={signUpViewStyles.registerWithButtonSet}>
        <CustomButton
          containerSx={signUpViewStyles.registerWithButton}
          iconSize={24}
          icon={GoogleIcon}
          textPosition={'right'}
          text={'Register with Google'}
        />

        <CustomButton
          containerSx={signUpViewStyles.registerWithButton}
          iconSize={24}
          icon={AppleIcon}
          textPosition={'right'}
          text={'Register with Apple'}
          onClick={() => ''}
        />
      </Box>

      <Box sx={signUpViewStyles.bottomActionBlock}>
        <Typography>Already have an account?</Typography>
        <ButtonBase
          sx={signUpViewStyles.actionButton}
          disableRipple
          href={'/signin'}
        >
          Login
        </ButtonBase>
      </Box>
    </StyledContainer>
  );
};

export default SignUpView;
