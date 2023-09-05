import { getSxStyles } from '../../../../utils/getSxStyles';

export const addTodoModalStyles = getSxStyles({
  formControl: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    color: (theme) => theme.palette.project_color_white.main,
    padding: '24px 24px 17px 24px',
  },
  legend: {
    fontWeight: 'bold',
    fontSize: '20px',
    color: 'inherit',
  },
  buttonGroup: {
    gap: '14px',
  },
});
