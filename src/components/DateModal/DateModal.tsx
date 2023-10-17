import React, { useRef, useState } from 'react';
import CustomDialog from '../CustomDialog/CustomDialog';
import { dateModalStyles, timeModalStyles } from './styles';
import { DateCalendar, MultiSectionDigitalClock } from '@mui/x-date-pickers';
import CustomPickersCalendarHeader from '../CustomPickersCalendarHeader';
import CustomDialogEvents from '../CustomDialog/CustomDialogEvents';
import ModalPickersLayout from '../ModalPickersLayout/ModalPickersLayout';
import { dateToISO } from '../../utils/dateUtils';
import Box from '@mui/material/Box';

type DateModalProps = {
  date: string | null;
  onSetDate: (toEditPart: Partial<ToDo>) => void;
  updateTodo?: (todoPart: Partial<ToDo>) => void;
};

const DateModal: React.FC<DateModalProps> = ({
  date,
  onSetDate,
  updateTodo,
}) => {
  const [isDateStage, setIsDateStage] = useState(true);
  const initialDate = useRef(date);
  let rightButtonText;

  if (updateTodo) {
    rightButtonText = isDateStage ? 'Choose time' : 'Save';
  }

  rightButtonText = isDateStage ? 'Edit time' : 'Edit';

  const onChangeDateHandler = (value: Date | null) => {
    const normalizedDate = value ? dateToISO(value) : value;

    onSetDate({ dueDate: normalizedDate });
  };

  const leftButtonHandler = () => {
    onSetDate({ dueDate: initialDate.current });
    setIsDateStage(true);
    CustomDialogEvents.emit('datePickerModal', false);
  };

  const rightButtonHandler = () => {
    setIsDateStage(false);
    if (!isDateStage) {
      setIsDateStage(true);
      CustomDialogEvents.emit('datePickerModal', false);
    }
    if (updateTodo && !isDateStage) {
      updateTodo({ dueDate: date });
      setIsDateStage(true);
    }
  };

  return (
    <CustomDialog persist id={'datePickerModal'}>
      <ModalPickersLayout
        leftButton={{
          callback: leftButtonHandler,
          text: 'Cancel',
        }}
        rightButton={{
          callback: rightButtonHandler,
          text: rightButtonText,
        }}
      >
        {isDateStage ? (
          <DateCalendar
            disablePast
            sx={dateModalStyles.dateCalendar}
            value={typeof date === 'string' ? new Date(date) : date}
            onChange={onChangeDateHandler}
            showDaysOutsideCurrentMonth
            slots={{
              calendarHeader: ({ currentMonth, onMonthChange }) => (
                <CustomPickersCalendarHeader
                  currentMonth={currentMonth}
                  onMonthChange={onMonthChange}
                />
              ),
            }}
          />
        ) : (
          <Box sx={timeModalStyles.multiSectionWrapper}>
            <MultiSectionDigitalClock
              sx={timeModalStyles.multiSection}
              timeSteps={{ minutes: 1 }}
              value={typeof date === 'string' ? new Date(date) : date}
              onChange={onChangeDateHandler}
              autoFocus={true}
            />
          </Box>
        )}
      </ModalPickersLayout>
    </CustomDialog>
  );
};

export default React.memo(DateModal);
