import React from 'react';
import CustomDialog from '../../../../../components/CustomDialog/CustomDialog';
import { dateModalStyles } from '../styles';
import { DateCalendar } from '@mui/x-date-pickers';
import CustomPickersCalendarHeader from '../../../../../components/CustomPickersCalendarHeader';
import CustomDialogEvents from '../../../../../components/CustomDialog/CustomDialogEvents';
import ModalPickersLayout from '../../../../../components/ModalPickersLayout/ModalPickersLayout';

type DateModalProps = {
  date: Date | null;
  onChangeDate: (value: Date | null) => void;
};

const DateModal: React.FC<DateModalProps> = ({ date, onChangeDate }) => {
  const onChangeDateHandler = (value: Date | null) => {
    onChangeDate(value);
  };

  const onCancelHandler = () => {
    onChangeDate(new Date());
    CustomDialogEvents.emit('datePickerModal', false);
  };

  const onChooseTimeHandler = () => {
    CustomDialogEvents.emit('datePickerModal', false);
    CustomDialogEvents.emit('timePickerModal', true);
  };

  return (
    <CustomDialog persist id={'datePickerModal'}>
      <ModalPickersLayout
        leftButton={{
          callback: onCancelHandler,
          text: 'Cancel',
        }}
        rightButton={{
          callback: onChooseTimeHandler,
          text: 'Choose Time',
        }}
      >
        <DateCalendar
          sx={dateModalStyles.dateCalendar}
          value={date}
          onChange={onChangeDateHandler}
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

export default React.memo(DateModal);
