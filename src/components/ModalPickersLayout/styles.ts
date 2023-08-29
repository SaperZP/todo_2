import { SystemStyleObject } from '@mui/system';
import { Theme } from '@mui/material';

export const modalPickersLayoutStyles = {
  modalWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '8px',
  } as SystemStyleObject,
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
  modalDivider: {
    borderWidth: 1,
    backgroundColor: (theme: Theme) => theme.palette.project_color_gray.main,
  } as SystemStyleObject,
  modalText: {
    color: (theme: Theme) => theme.palette.project_color_white.main,
    textAlign: 'center',
    textTransform: 'capitalize',
  } as SystemStyleObject,
};
