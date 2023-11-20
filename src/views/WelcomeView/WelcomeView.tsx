import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { StyledContainer } from '../../components/styledComponents';
import { welcomeViewStyles } from './styles';
import { useNavigate } from 'react-router-dom';

const WelcomeView = () => {
  const navigate = useNavigate();

  return (
    <StyledContainer disableGutters>
      <Box sx={welcomeViewStyles.wrapper}>
        <Box sx={welcomeViewStyles.section}>
          <Typography component={'h1'} sx={welcomeViewStyles.title}>
            Welcome to Todo
          </Typography>
          <Typography component={'h2'} sx={welcomeViewStyles.text}>
            Please login to your account or create a new account to continue
          </Typography>
        </Box>
        <Box sx={welcomeViewStyles.section}>
          <Button
            onClick={() => navigate('/signin')}
            sx={welcomeViewStyles.loginButton}
            variant={'contained'}
          >
            Login
          </Button>
          <Button
            onClick={() => navigate('/signup')}
            sx={welcomeViewStyles.signUp}
            variant={'outlined'}
          >
            Create account
          </Button>
        </Box>
      </Box>
    </StyledContainer>
  );
};

export default WelcomeView;
