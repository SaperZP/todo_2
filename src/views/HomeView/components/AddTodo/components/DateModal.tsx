import React from 'react';
import CustomDialog from '../../../../../components/CustomDialog/CustomDialog';
import { addTodoStyles } from '../styles';
import { DateCalendar } from '@mui/x-date-pickers';
import CustomPickersCalendarHeader from '../../../../../components/CustomPickersCalendarHeader';
import CustomDialogEvents from '../../../../../components/CustomDialog/CustomDialogEvents';
import ModalPickersLayout from '../../../../../components/ModalPickersLayout/ModalPickersLayout';

type DateModalProps = {
  date: Date | null;
  onChangeDate: (value: Date | null) => void;
};

const DateModal: React.FC<DateModalProps> = ({ date, onChangeDate }) => {
  return (
    <CustomDialog persist id={'datePickerModal'}>
      <ModalPickersLayout
        leftButton={{
          callback: () => CustomDialogEvents.emit('datePickerModal', false),
          text: 'Cancel',
        }}
        rightButton={{
          callback: () => {
            CustomDialogEvents.emit('datePickerModal', false);
            CustomDialogEvents.emit('timePickerModal', true);
          },
          text: 'Choose Time',
        }}
      >
        <DateCalendar
          sx={addTodoStyles.dateCalendar}
          value={date}
          onChange={(value) => onChangeDate(value)}
          showDaysOutsideCurrentMonth
          disableHighlightToday
          slots={{
            calendarHeader: ({ currentMonth, onMonthChange }) => (
              <CustomPickersCalendarHeader
                currentMonth={currentMonth}
                onMonthChange={onMonthChange}
              />
            ),
          }}
        />
      </ModalPickersLayout>
    </CustomDialog>
  );
};

export default DateModal;
