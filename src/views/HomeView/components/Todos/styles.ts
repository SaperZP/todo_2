import { SystemStyleObject } from '@mui/system';
import { Theme } from '@mui/material';

export const todosListStyles = {
  wrapper: {
    display: 'flex',
    gap: '20px',
    paddingX: '24px',
  } as SystemStyleObject,
  textField: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: (theme: Theme) => theme.palette.project_color_gray.main,
    },

    '& .MuiInputLabel-root': {
      top: '50%',
      left: '36px',
    },
  } as SystemStyleObject,
};
