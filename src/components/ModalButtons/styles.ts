import { SystemStyleObject } from '@mui/system';
import { Theme } from '@mui/material';

export const modalButtonsStyles = {
  modalButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '5px',
  } as SystemStyleObject,

  modalButton: {
    textTransform: 'none',
    '&.MuiButton-contained': {
      backgroundColor: (theme: Theme) => theme.palette.project_color_blue.main,
    } as SystemStyleObject,
    '&.MuiButton-text': {
      color: (theme: Theme) => theme.palette.project_color_blue.main,
    } as SystemStyleObject,
  } as SystemStyleObject,
};
