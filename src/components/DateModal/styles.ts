import { getSxStyles } from '../../utils/getSxStyles';

export const dateModalStyles = getSxStyles({
  dateCalendar: {
    margin: '0',
    width: 'auto',
    '& .MuiPickersSlideTransition-root': {
      minHeight: '192px',
    },
  },
});

export const timeModalStyles = getSxStyles({
  multiSectionWrapper: {
    height: '96px',
    overflow: 'hidden',
    display: 'flex',
  },
  multiSection: {
    width: 'auto',
    borderBottom: 'unset',
  },
});
