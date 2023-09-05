import { getSxStyles } from '../../utils/getSxStyles';

export const taskPriorityModalStyles = getSxStyles({
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    width: '304px',
    alignSelf: 'center',
  },
  rangeItem: {
    cursor: 'pointer',
    width: '64px',
    height: '64px',
    borderRadius: '4px',
    color: (theme) => theme.palette.project_color_white.main,
    backgroundColor: (theme) => theme.palette.project_color_black.dark,
    ':hover': {
      backgroundColor: (theme) => theme.palette.project_color_blue.main,
    },
  },
});
