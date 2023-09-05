import React, { useRef } from 'react';
import CustomDialog from '../../../../../components/CustomDialog/CustomDialog';
import Box from '@mui/material/Box';
import { ReactComponent as CustomFlagIcon } from '../../../../../assets/icons/flag.svg';
import CustomButton from '../../../../../components/CustomButton';
import ModalPickersLayout from '../../../../../components/ModalPickersLayout/ModalPickersLayout';
import { taskPriorityModalStyles } from '../styles';
import CustomDialogEvents from '../../../../../components/CustomDialog/CustomDialogEvents';
import { useTheme } from '@mui/material';

type TaskPriorityModalProps = {
  taskPriority: number | null;
  onSetPriority: (toEditPart: Partial<ToDo>) => void;
  updateTodo?: (todoPart: Partial<ToDo>) => void;
};

const TaskPriorityModal: React.FC<TaskPriorityModalProps> = ({
  taskPriority,
  onSetPriority,
  updateTodo,
}) => {
  const theme = useTheme();
  const priorityRange = Array.from({ length: 10 }, (_, i) => i + 1);
  const initialPriority = useRef(taskPriority);

  const rightButtonHandler = () => {
    if (updateTodo) {
      updateTodo({ priority: taskPriority });
    }

    CustomDialogEvents.emit('taskPriorityModal', false);
  };

  const lefButtonHandler = () => {
    onSetPriority({ priority: initialPriority.current });
    CustomDialogEvents.emit('taskPriorityModal', false);
  };

  return (
    <CustomDialog id={'taskPriorityModal'}>
      <ModalPickersLayout
        leftButton={{
          callback: lefButtonHandler,
          text: 'Cancel',
        }}
        rightButton={{
          callback: rightButtonHandler,
          text: updateTodo ? 'Edit' : 'Save',
        }}
        title={'Task Priority'}
      >
        <Box sx={taskPriorityModalStyles.wrapper}>
          {priorityRange.map((item, index) => {
            const isSelected =
              item === taskPriority
                ? { backgroundColor: theme.palette.project_color_blue.main }
                : {};

            return (
              <CustomButton
                key={index}
                onClick={() => onSetPriority({ priority: item })}
                containerSx={{
                  ...taskPriorityModalStyles.rangeItem,
                  ...isSelected,
                }}
                muiButtonProps={{ disableRipple: true }}
                icon={CustomFlagIcon}
                text={item.toString()}
                textPosition={'bottom'}
              />
            );
          })}
        </Box>
      </ModalPickersLayout>
    </CustomDialog>
  );
};

export default React.memo(TaskPriorityModal);
