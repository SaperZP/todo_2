import { Theme } from '@mui/material';
import { SystemStyleObject } from '@mui/system';

export const addTodoStyles = {
  formControl: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    color: (theme: Theme) => theme.palette.project_color_white.main,
    height: '33vh',
    padding: '24px 24px 17px 24px',
  } as SystemStyleObject,
  legend: {
    fontWeight: 'bold',
    fontSize: '20px',
    color: 'inherit',
  } as SystemStyleObject,
  buttonGroup: {
    gap: '14px',
  } as SystemStyleObject,
  dateCalendar: {
    margin: '0',
    width: 'auto',
    '& .MuiPickersSlideTransition-root': {
      minHeight: '192px',
    },
  } as SystemStyleObject,
  multiSectionWrapper: {
    height: '96px',
    overflow: 'hidden',
    display: 'flex',
  } as SystemStyleObject,
  multiSection: {
    width: 'auto',
    borderBottom: 'unset',
  } as SystemStyleObject,
  taskPriorityWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    width: '304px',
    alignSelf: 'center',
  } as SystemStyleObject,
  taskPriorityRangeItem: {
    cursor: 'pointer',
    width: '64px',
    height: '64px',
    borderRadius: '4px',
    color: (theme: Theme) => theme.palette.project_color_white.main,
    backgroundColor: (theme: Theme) => theme.palette.project_color_black.dark,
    ':hover': {
      backgroundColor: (theme: Theme) => theme.palette.project_color_blue.main,
    },
  } as SystemStyleObject,
  taskCategoryWrapper: {
    display: 'grid',
    flexWrap: 'wrap',
    gridTemplateColumns: 'repeat(auto-fill, 64px)',
    justifyContent: 'center',
    columnGap: '49px',
    rowGap: '16px',
  } as SystemStyleObject,
  taskCategoryItemText: {
    fontSize: '14px',
    color: 'white',
  } as SystemStyleObject,
  taskCategoryItemButton: {
    border: '1px solid transparent',
    borderRadius: '4px',
    padding: '16px',
  } as SystemStyleObject,
};
