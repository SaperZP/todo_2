import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import { modalPickersLayoutStyles } from './styles';
import ModalButtons from '../ModalButtons';

type modalPickersLayoutProps = {
  title?: string;
  leftButton?: modalButtonType;
  rightButton?: modalButtonType;
  children: React.ReactElement | React.ReactElement[];
};

const ModalPickersLayout: React.FC<modalPickersLayoutProps> = ({
  title,
  rightButton,
  leftButton,
  children,
}) => {
  return (
    <Box sx={modalPickersLayoutStyles.modalWrapper}>
      {title && (
        <Box>
          <Typography
            sx={modalPickersLayoutStyles.modalText}
            variant={'subtitle1'}
          >
            {title}
          </Typography>

          <Divider sx={modalPickersLayoutStyles.modalDivider} />
        </Box>
      )}

      {children}

      {leftButton && rightButton && (
        <ModalButtons leftButton={leftButton} rightButton={rightButton} />
      )}
    </Box>
  );
};

export default ModalPickersLayout;
