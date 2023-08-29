import { Dialog, Fab, styled, TextField, Theme } from '@mui/material';

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiFormLabel-root': {
    transition: 'unset',
    fontSize: '18px',
    color: theme.palette.project_color_gray.light,
  },
  '& .MuiFormLabel-root.Mui-focused, .MuiFormLabel-root.MuiFormLabel-filled': {
    display: 'none',
  },
  '& .MuiInputBase-input': {
    color: theme.palette.project_color_white.main,
    '::placeholder': {
      transition: 'unset',
      color: theme.palette.project_color_white.main,
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    top: 0,
    legend: { display: 'none' },
    borderColor: 'transparent',
  },
  '& .MuiInputBase-root.Mui-focused': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.project_color_gray.main,
    },
  },
  '& .MuiInputBase-root:hover': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.project_color_gray.main,
    },
  },
}));

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-container': {
    maxWidth: '600px',
    margin: 'auto',
  },
  '& .MuiPaper-root': {
    width: '100%',
    margin: 16,
    borderRadius: 4,
    backgroundColor: theme.palette.project_color_black.light,
  },
}));
StyledDialog.defaultProps = {
  PaperProps: {
    elevation: 0,
  },
};

export const StyledFab = styled(Fab)(({ theme }) => ({
  width: '64px',
  height: '64px',
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  backgroundColor: theme.palette.project_color_blue.main,
  margin: '0 auto',
  '& .MuiSvgIcon-root': {
    width: '32px',
    height: '32px',
  },
}));
