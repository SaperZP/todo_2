import { SystemStyleObject } from '@mui/system';
import { Theme } from '@mui/material';

export const todoDetailsStyles = {
  container: {
    paddingTop: '10px',
    gap: '34px',
  } as SystemStyleObject,
  header: {
    color: (theme: Theme) => theme.palette.project_color_white.main,
  } as SystemStyleObject,
  closeButton: {
    backgroundColor: (theme: Theme) => theme.palette.project_color_black.light,
    borderRadius: '4px',
  } as SystemStyleObject,
  mainDetails: {
    display: 'flex',
    gap: '20px',
  } as SystemStyleObject,
  mainDetailsText: {
    flexGrow: 1,
  } as SystemStyleObject,
  taskName: {
    color: (theme: Theme) => theme.palette.project_color_white.main,
  } as SystemStyleObject,
  taskDescription: {
    color: (theme: Theme) => theme.palette.project_color_gray.light,
  } as SystemStyleObject,
};
