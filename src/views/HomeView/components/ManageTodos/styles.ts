import { SystemStyleObject } from '@mui/system';
import { Theme } from '@mui/material';

export const manageTodosStyles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
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

export const todoListStyles = {
  todoListWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  } as SystemStyleObject,

  hideButton: {
    textTransform: 'capitalize',
    borderRadius: '8px',
    padding: '5px 10px',
    backgroundColor: (theme: Theme) => theme.palette.project_color_black.light,
  } as SystemStyleObject,

  itemsWrapper: {
    '& .MuiCollapse-wrapperInner': {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
    },
  } as SystemStyleObject,
};

export const todoItemStyles = {
  wrapper: {
    display: 'flex',
    padding: '10px',
    backgroundColor: (theme: Theme) => theme.palette.project_color_black.light,
    color: (theme: Theme) => theme.palette.project_color_white.main,
    borderRadius: '8px',
  } as SystemStyleObject,
  radioButtonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as SystemStyleObject,
  mainContentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    gap: '6px',
  } as SystemStyleObject,
  title: {
    textAlign: 'initial',
  } as SystemStyleObject,
  mainContentBottom: {
    display: 'flex',
  } as SystemStyleObject,
  dateText: {
    textTransform: 'capitalize',
    color: (theme: Theme) => theme.palette.project_color_gray.light,
  } as SystemStyleObject,
  mainContentBadges: {
    display: 'flex',
    gap: '12px',
    flexGrow: 1,
    justifyContent: 'end',
  } as SystemStyleObject,
  priority: {
    border: '1px solid',
    borderColor: (theme: Theme) => theme.palette.project_color_blue.main,
  } as SystemStyleObject,
};

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
