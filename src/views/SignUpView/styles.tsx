import { getSxStyles } from '../../utils/getSxStyles';

export const signUpViewStyles = getSxStyles({
  container: {
    paddingTop: '10px',
    paddingBottom: '33px',
  },
  backButton: {
    padding: 0,
    marginBottom: '16px',
  },
  title: {
    color: (theme) => theme.palette.project_color_white.main,
  },
  form: {
    marginTop: '25px',
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
  },
  submitButton: {
    textTransform: 'capitalize',
    backgroundColor: (theme) => theme.palette.project_color_blue.main,
    marginTop: '40px',
    '&.MuiButton-root.Mui-disabled': {
      backgroundColor: (theme) => theme.palette.project_color_blue.light,
      color: (theme) => theme.palette.project_color_white.light,
    },
  },
  divider: {
    marginY: '24px',
    color: (theme) => theme.palette.project_color_gray.main,
    '&.MuiDivider-root': {
      justifyContent: 'center',
      '::before, ::after': {
        marginTop: '1px',
        borderColor: (theme) => theme.palette.project_color_gray.main,
      },
    },
  },
  registerWithButton: {
    cursor: 'pointer',
    justifyContent: 'center',
    color: (theme) => theme.palette.project_color_white.main,
    border: 'solid 1px',
    borderRadius: '4px',
    borderColor: (theme) => theme.palette.project_color_blue.main,
  },
  registerWithButtonSet: {
    display: 'flex',
    flexDirection: 'column',
    gap: '17px',
  },

  bottomActionBlock: {
    marginTop: 'auto',
    display: 'flex',
    justifyContent: 'center',
    gap: '2px',
    color: (theme) => theme.palette.project_color_gray.main,
  },

  actionButton: {
    color: (theme) => theme.palette.project_color_white.main,
  },
});
