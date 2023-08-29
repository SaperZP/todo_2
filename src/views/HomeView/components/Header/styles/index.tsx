import { SystemStyleObject } from '@mui/system';

export const headerStyle = {
  header: {
    backgroundColor: 'transparent',
    position: 'static',
  } as SystemStyleObject,

  toolbarLeft: { width: '40px' } as SystemStyleObject,
  toolbarCenter: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
  } as SystemStyleObject,
  toolbarCenter_text: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.87)',
    textDecoration: 'none',
  } as SystemStyleObject,
};
