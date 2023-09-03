import { Theme } from '@mui/material';
import { SystemStyleObject } from '@mui/system';

export const addTodoModalStyles = {
  formControl: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    color: (theme: Theme) => theme.palette.project_color_white.main,
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
};

export const dateModalStyles = {
  dateCalendar: {
    margin: '0',
    width: 'auto',
    '& .MuiPickersSlideTransition-root': {
      minHeight: '192px',
    },
  } as SystemStyleObject,
};

export const timeModalStyles = {
  multiSectionWrapper: {
    height: '96px',
    overflow: 'hidden',
    display: 'flex',
  } as SystemStyleObject,
  multiSection: {
    width: 'auto',
    borderBottom: 'unset',
  } as SystemStyleObject,
};

export const taskPriorityModalStyles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    width: '304px',
    alignSelf: 'center',
  } as SystemStyleObject,
  rangeItem: {
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
};

export const taskCategoryModal = {
  wrapper: {
    display: 'grid',
    flexWrap: 'wrap',
    gridTemplateColumns: 'repeat(auto-fill, 64px)',
    justifyContent: 'center',
    columnGap: '49px',
    rowGap: '16px',
  } as SystemStyleObject,
  itemText: {
    fontSize: '14px',
    color: 'white',
  } as SystemStyleObject,
  itemButton: {
    border: '1px solid transparent',
    borderRadius: '4px',
    padding: '16px',
  } as SystemStyleObject,
};
