import React, { useState } from 'react';
import CustomDialog from '../../../../../components/CustomDialog/CustomDialog';
import Box from '@mui/material/Box';
import { ReactComponent as CustomFlagIcon } from '../../../../../assets/icons/flag.svg';
import CustomButton from '../../../../../components/CustomButton';
import ModalPickersLayout from '../../../../../components/ModalPickersLayout/ModalPickersLayout';
import { addTodoStyles } from '../styles';
import CustomDialogEvents from '../../../../../components/CustomDialog/CustomDialogEvents';
import { useTheme } from '@mui/material';

type TaskPriorityModalProps = {
  value: string;
  onSave: (value: string) => void;
};

const TaskPriorityModal: React.FC<TaskPriorityModalProps> = ({
  value,
  onSave,
}) => {
  const theme = useTheme();
  const priorityRange = Array.from({ length: 10 }, (_, i) => i + 1);
  const [selectedPriority, setSelectedPriority] = useState(value);

  const changePriorityHandler = () => {
    CustomDialogEvents.emit('taskPriorityModal', false);
    onSave(selectedPriority);
  };

  const cancelHandler = () => {
    setSelectedPriority('');
    onSave('');
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
          callback: changePriorityHandler,
          text: 'Save',
        }}
        title={'Task Priority'}
      >
        <Box sx={addTodoStyles.taskPriorityWrapper}>
          {priorityRange.map((item, index) => {
            const isSelected =
              item.toString() === selectedPriority
                ? { backgroundColor: theme.palette.project_color_blue.main }
                : {};

            return (
              <CustomButton
                key={index}
                onClick={() => setSelectedPriority(item.toString())}
                containerSx={{
                  ...addTodoStyles.taskPriorityRangeItem,
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

export default TaskPriorityModal;
