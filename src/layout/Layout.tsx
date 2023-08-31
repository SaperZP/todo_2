import React from 'react';
import { AppBar } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import { Add as AddIcon } from '@mui/icons-material';
import { layoutStyles } from './layoutStyles';
import { ReactComponent as HomeIcon } from '../assets/icons/home.svg';
import { ReactComponent as HomeIconActive } from '../assets/icons/home-active.svg';
import { ReactComponent as Calendar } from '../assets/icons/calendar.svg';
import { ReactComponent as CalendarActive } from '../assets/icons/calendar-active.svg';
import { ReactComponent as Focus } from '../assets/icons/focus.svg';
import { ReactComponent as FocusActive } from '../assets/icons/focus-active.svg';
import { ReactComponent as Profile } from '../assets/icons/profile.svg';
import Box from '@mui/material/Box';
import CustomButton from '../components/CustomButton';
import { StyledContainer, StyledFab } from '../components/styledComponents';
import CustomDialogEvents from '../components/CustomDialog/CustomDialogEvents';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();
  const currentView = useLocation().pathname;

  console.log(currentView);

  return (
    <StyledContainer disableGutters maxWidth={'sm'}>
      <Box sx={layoutStyles.outletHolder}>
        <Outlet />
      </Box>

      <AppBar sx={layoutStyles.layoutFooter} component={'footer'}>
        <Toolbar sx={{ height: '100px' }}>
          <StyledFab
            onClick={() => CustomDialogEvents.emit('addTodoModal', true)}
            color="secondary"
            aria-label="add"
          >
            <AddIcon />
          </StyledFab>

          <Box sx={layoutStyles.toolbarSection}>
            <CustomButton
              muiButtonProps={{}}
              text={'Home'}
              textPosition={'bottom'}
              icon={currentView === '/' ? HomeIconActive : HomeIcon}
              onClick={() => navigate('/')}
            />

            <CustomButton
              text={'Calendar'}
              textPosition={'bottom'}
              icon={currentView === '/calendar' ? CalendarActive : Calendar}
              onClick={() => navigate('/calendar')}
            />

            <CustomButton
              text={'Focus'}
              textPosition={'bottom'}
              icon={currentView === '/focus' ? FocusActive : Focus}
              onClick={() => navigate('/focus')}
            />

            <CustomButton
              text={'Profile'}
              textPosition={'bottom'}
              icon={Profile}
              onClick={() => navigate('/profile')}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </StyledContainer>
  );
};

export default Layout;
