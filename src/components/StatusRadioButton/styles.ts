import { Theme } from '@mui/material';
import { SystemStyleObject } from '@mui/system';

export const StatusRadioButtonStyles = {
  radioButton: {
    '&.MuiRadio-root': {
      color: (theme: Theme) => theme.palette.project_color_white.main,
    } as SystemStyleObject,
  },
};
