import React, { useState } from 'react';
import CustomDialog from '../../../../../components/CustomDialog/CustomDialog';
import Box from '@mui/material/Box';
import { MultiSectionDigitalClock } from '@mui/x-date-pickers';
import { addTodoStyles } from '../styles';
import CustomDialogEvents from '../../../../../components/CustomDialog/CustomDialogEvents';
import ModalPickersLayout from '../../../../../components/ModalPickersLayout/ModalPickersLayout';

type TimeModalProps = {
  date: Date | null;
  onSave: (value: Date | null) => void;
};

const TimeModal: React.FC<TimeModalProps> = ({ date, onSave }) => {
  const [time, setTime] = useState<Date | null>(date);

  const saveHandler = () => {
    CustomDialogEvents.emit('timePickerModal', false);
    onSave(time);
  };

  return (
    <CustomDialog persist id={'timePickerModal'}>
      <ModalPickersLayout
        leftButton={{
          callback: () => CustomDialogEvents.emit('timePickerModal', false),
          text: 'Cancel',
        }}
        rightButton={{
          callback: saveHandler,
          text: 'Save',
        }}
        title={'Choose time'}
      >
        <Box sx={addTodoStyles.multiSectionWrapper}>
          <MultiSectionDigitalClock
            sx={addTodoStyles.multiSection}
            timeSteps={{ minutes: 1 }}
            value={time}
            onChange={setTime}
            autoFocus={true}
          />
        </Box>
      </ModalPickersLayout>
    </CustomDialog>
  );
};

export default TimeModal;
