import React, { useState } from 'react';
import CustomDialog from '../../../../../components/CustomDialog/CustomDialog';
import ModalPickersLayout from '../../../../../components/ModalPickersLayout/ModalPickersLayout';
import Box from '@mui/material/Box';
import CustomButton from '../../../../../components/CustomButton';
import CustomDialogEvents from '../../../../../components/CustomDialog/CustomDialogEvents';
import { addTodoStyles } from '../styles';
import { useTheme } from '@mui/material';
import categoriesList from '../../../../../utils/categoriesList';

type TaskCategoryModalProps = {
  value: string;
  onSave: (value: string) => void;
};

const TaskCategoryModal: React.FC<TaskCategoryModalProps> = ({
  value,
  onSave,
}) => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState(value);

  const saveHandler = () => {
    CustomDialogEvents.emit('TaskCategoryModal', false);
    onSave(selectedCategory);
  };

  const cancelHandler = () => {
    setSelectedCategory('');
    onSave('');
    CustomDialogEvents.emit('TaskCategoryModal', false);
  };

  return (
    <CustomDialog persist id={'TaskCategoryModal'}>
      <ModalPickersLayout
        leftButton={{ callback: cancelHandler, text: 'Cancel' }}
        rightButton={{ callback: saveHandler, text: 'Save' }}
        title={'Choose category'}
      >
        <Box sx={addTodoStyles.taskCategoryWrapper}>
          {categoriesList.map((category) => {
            const isSelected =
              selectedCategory === category.id
                ? {
                    backgroundColor: 'initial',
                    border: '1px solid',
                    borderColor: theme.palette.project_color_white.main,
                  }
                : { backgroundColor: category.backgroundColor };

            return (
              <CustomButton
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                text={category.name}
                textPosition={'bottom'}
                icon={category.icon}
                iconSize={32}
                iconColor={category.backgroundColor}
                textSx={addTodoStyles.taskCategoryItemText}
                muiButtonProps={{
                  disableRipple: true,
                  sx: {
                    ...addTodoStyles.taskCategoryItemButton,
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

export default TaskCategoryModal;
