import React from 'react';
import CustomDialog from '../../../../../components/CustomDialog/CustomDialog';
import ModalPickersLayout from '../../../../../components/ModalPickersLayout/ModalPickersLayout';
import Box from '@mui/material/Box';
import CustomButton from '../../../../../components/CustomButton';
import CustomDialogEvents from '../../../../../components/CustomDialog/CustomDialogEvents';
import { taskCategoryModal } from '../styles';
import { useTheme } from '@mui/material';
import categoriesList from '../../../../../utils/categoriesList';

type TaskCategoryModalProps = {
  taskCategory: string;
  onSetPriority: (value: string) => void;
};

const TaskCategoryModal: React.FC<TaskCategoryModalProps> = ({
  taskCategory,
  onSetPriority,
}) => {
  const theme = useTheme();

  const saveHandler = () => {
    CustomDialogEvents.emit('TaskCategoryModal', false);
  };

  const cancelHandler = () => {
    onSetPriority('');
    CustomDialogEvents.emit('TaskCategoryModal', false);
  };

  return (
    <CustomDialog persist id={'TaskCategoryModal'}>
      <ModalPickersLayout
        leftButton={{ callback: cancelHandler, text: 'Cancel' }}
        rightButton={{ callback: saveHandler, text: 'Save' }}
        title={'Choose category'}
      >
        <Box sx={taskCategoryModal.wrapper}>
          {categoriesList.map((category) => {
            const isSelected =
              taskCategory === category.id
                ? {
                    backgroundColor: 'initial',
                    border: '1px solid',
                    borderColor: theme.palette.project_color_white.main,
                  }
                : { backgroundColor: category.backgroundColor };

            return (
              <CustomButton
                key={category.id}
                onClick={() => onSetPriority(category.id)}
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
