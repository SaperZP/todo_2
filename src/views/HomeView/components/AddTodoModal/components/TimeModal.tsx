import React from 'react';
import CustomDialog from '../../../../../components/CustomDialog/CustomDialog';
import Box from '@mui/material/Box';
import { MultiSectionDigitalClock } from '@mui/x-date-pickers';
import { timeModalStyles } from '../styles';
import CustomDialogEvents from '../../../../../components/CustomDialog/CustomDialogEvents';
import ModalPickersLayout from '../../../../../components/ModalPickersLayout/ModalPickersLayout';

type TimeModalProps = {
  date: Date | null;
  onChangeTime: (value: Date | null) => void;
};

const TimeModal: React.FC<TimeModalProps> = ({ date, onChangeTime }) => {
  const saveHandler = () => {
    CustomDialogEvents.emit('timePickerModal', false);
  };

  const cancelHandler = () => {
    CustomDialogEvents.emit('timePickerModal', false);
  };

  return (
    <CustomDialog persist id={'timePickerModal'}>
      <ModalPickersLayout
        leftButton={{
          callback: cancelHandler,
          text: 'Cancel',
        }}
        rightButton={{
          callback: saveHandler,
          text: 'Save',
        }}
        title={'Choose time'}
      >
        <Box sx={timeModalStyles.multiSectionWrapper}>
          <MultiSectionDigitalClock
            sx={timeModalStyles.multiSection}
            timeSteps={{ minutes: 1 }}
            value={date}
            onChange={onChangeTime}
            autoFocus={true}
          />
        </Box>
      </ModalPickersLayout>
    </CustomDialog>
  );
};

export default React.memo(TimeModal);
