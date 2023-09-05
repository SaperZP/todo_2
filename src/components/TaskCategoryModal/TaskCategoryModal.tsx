import React, { useRef } from 'react';
import CustomDialog from '../CustomDialog/CustomDialog';
import ModalPickersLayout from '../ModalPickersLayout/ModalPickersLayout';
import Box from '@mui/material/Box';
import CustomButton from '../CustomButton';
import CustomDialogEvents from '../CustomDialog/CustomDialogEvents';
import { taskCategoryModal } from './styles';
import { useTheme } from '@mui/material';
import categoriesList from '../../utils/categoriesList';

type TaskCategoryModalProps = {
  taskCategoryId: string | null;
  onSetCategory: (todoPart: Partial<ToDo>) => void;
  updateTodo?: (todoPart: Partial<ToDo>) => void;
};

const TaskCategoryModal: React.FC<TaskCategoryModalProps> = ({
  taskCategoryId,
  onSetCategory,
  updateTodo,
}) => {
  const theme = useTheme();
  const initialCategory = useRef(taskCategoryId);

  const rightButtonHandler = () => {
    if (updateTodo) {
      updateTodo({ categoryId: taskCategoryId });
    }

    CustomDialogEvents.emit('taskCategoryModal', false);
  };

  const leftButtonHandler = () => {
    onSetCategory({ categoryId: initialCategory.current });
    CustomDialogEvents.emit('taskCategoryModal', false);
  };

  return (
    <CustomDialog persist id={'taskCategoryModal'}>
      <ModalPickersLayout
        leftButton={{ callback: leftButtonHandler, text: 'Cancel' }}
        rightButton={{ callback: rightButtonHandler, text: 'Save' }}
        title={'Choose category'}
      >
        <Box sx={taskCategoryModal.wrapper}>
          {categoriesList.map((category) => {
            const isSelected =
              taskCategoryId === category.id
                ? {
                    backgroundColor: 'initial',
                    border: '1px solid',
                    borderColor: theme.palette.project_color_white.main,
                  }
                : { backgroundColor: category.backgroundColor };

            return (
              <CustomButton
                key={category.id}
                onClick={() => onSetCategory({ categoryId: category.id })}
                text={category.name}
                textPosition={'bottom'}
                icon={category.icon}
                iconSize={32}
                iconColor={category.backgroundColor}
                textSx={taskCategoryModal.itemText}
                muiButtonProps={{
                  disableRipple: true,
                  sx: {
                    ...taskCategoryModal.itemButton,
                    ...isSelected,
                  },
                }}
              />
            );
          })}
        </Box>
      </ModalPickersLayout>
    </CustomDialog>
  );
};

export default React.memo(TaskCategoryModal);
