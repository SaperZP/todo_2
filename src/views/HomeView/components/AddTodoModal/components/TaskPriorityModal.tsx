import React from 'react';
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
  onSetTask: (value: number | null) => void;
};

const TaskPriorityModal: React.FC<TaskPriorityModalProps> = ({
  taskPriority,
  onSetTask,
}) => {
  const theme = useTheme();
  const priorityRange = Array.from({ length: 10 }, (_, i) => i + 1);

  const onSaveHandler = () => {
    CustomDialogEvents.emit('taskPriorityModal', false);
  };

  const cancelHandler = () => {
    onSetTask(null);
    CustomDialogEvents.emit('taskPriorityModal', false);
  };

  return (
    <CustomDialog id={'taskPriorityModal'}>
      <ModalPickersLayout
        leftButton={{
          callback: cancelHandler,
          text: 'Cancel',
        }}
        rightButton={{
          callback: onSaveHandler,
          text: 'Save',
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
                onClick={() => onSetTask(item)}
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
