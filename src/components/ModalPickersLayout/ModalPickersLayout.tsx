import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Divider } from '@mui/material';
import { modalPickersLayoutStyles } from './styles';

type buttonProps = {
  text: string;
  callback: () => void;
};

type modalPickersLayoutProps = {
  title?: string;
  leftButton: buttonProps;
  rightButton: buttonProps;
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

      <Box sx={modalPickersLayoutStyles.modalButtons}>
        <Button
          onClick={leftButton.callback}
          sx={modalPickersLayoutStyles.modalButton}
          fullWidth
          variant="text"
        >
          {leftButton.text}
        </Button>

        <Button
          onClick={rightButton.callback}
          sx={modalPickersLayoutStyles.modalButton}
          fullWidth
          variant="contained"
        >
          {rightButton.text}
        </Button>
      </Box>
    </Box>
  );
};

export default ModalPickersLayout;
