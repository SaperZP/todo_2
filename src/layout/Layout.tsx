import React from 'react';
import { AppBar } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import { Add as AddIcon } from '@mui/icons-material';
import { layoutStyles } from './layoutStyles';
import Calendar from '@/assets/icons/calendar.svg?react';
import CalendarActive from '@/assets/icons/calendar-active.svg?react';
import HomeIcon from '@/assets/icons/home.svg?react';
import HomeIconActive from '@/assets/icons/home-active.svg?react';
import Focus from '@/assets/icons/focus.svg?react';
import FocusActive from '@/assets/icons/focus-active.svg?react';
import Profile from '@/assets/icons/profile.svg?react';
import Box from '@mui/material/Box';
import CustomButton from '../components/CustomButton';
import { StyledContainer, StyledFab } from '../components/styledComponents';
import CustomDialogEvents from '../components/CustomDialog/CustomDialogEvents';
import { Outlet } from 'react-router-dom';

type LayoutProps = {
  withAppBar?: boolean;
};

const Layout: React.FC<LayoutProps> = ({ withAppBar }) => {
  const navigate = useNavigate();
  const currentView = useLocation().pathname;

  return (
    <Box sx={layoutStyles.rootContainer}>
      <StyledContainer disableGutters>
        <Box sx={layoutStyles.outletHolder}>
          <Outlet />
        </Box>

        {withAppBar && (
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
        )}
      </StyledContainer>
    </Box>
  );
};

export default Layout;
