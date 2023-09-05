import { getSxStyles } from '../../utils/getSxStyles';

export const taskCategoryModal = getSxStyles({
  wrapper: {
    display: 'grid',
    flexWrap: 'wrap',
    gridTemplateColumns: 'repeat(auto-fill, 64px)',
    justifyContent: 'center',
    columnGap: '49px',
    rowGap: '16px',
  },
  itemText: {
    fontSize: '14px',
    color: 'white',
  },
  itemButton: {
    border: '1px solid transparent',
    borderRadius: '4px',
    padding: '16px',
  },
});
