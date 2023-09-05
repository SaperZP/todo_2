import { getSxStyles } from '../../utils/getSxStyles';

export const todoDetailsStyles = getSxStyles({
  container: {
    paddingTop: '10px',
    gap: '34px',
  },
  header: {
    color: (theme) => theme.palette.project_color_white.main,
  },
  closeButton: {
    backgroundColor: (theme) => theme.palette.project_color_black.light,
    borderRadius: '4px',
  },
  mainDetails: {
    display: 'flex',
    gap: '20px',
  },
  mainDetailsText: {
    flexGrow: 1,
  },
  taskName: {
    color: (theme) => theme.palette.project_color_white.main,
  },
  taskDescription: {
    color: (theme) => theme.palette.project_color_gray.light,
  },
});

export const editTodoSection = getSxStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    color: (theme) => theme.palette.project_color_white.main,
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  editSectionButton: {
    textTransform: 'capitalize',
    backgroundColor: (theme) => theme.palette.project_color_gray.main,
  },
});
