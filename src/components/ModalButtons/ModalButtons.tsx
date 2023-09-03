import React, { FC } from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { modalButtonsStyles } from './styles';

type ModalLayoutButtonsProps = {
  leftButton: modalButtonType;
  rightButton: modalButtonType;
};

const ModalButtons: FC<ModalLayoutButtonsProps> = ({
  leftButton,
  rightButton,
}) => (
  <Box sx={modalButtonsStyles.modalButtons}>
    <Button
      onClick={leftButton.callback}
      sx={modalButtonsStyles.modalButton}
      fullWidth
      variant="text"
    >
      {leftButton.text}
    </Button>

    <Button
      onClick={rightButton.callback}
      sx={modalButtonsStyles.modalButton}
      fullWidth
      variant="contained"
    >
      {rightButton.text}
    </Button>
  </Box>
);

export default ModalButtons;
