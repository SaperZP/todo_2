import React from 'react';
import { SlideDirection } from '@mui/x-date-pickers/DateCalendar/PickersSlideTransition';
import CustomButton from '../CustomButton';
import { addMonths, format } from 'date-fns';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { CustomPickersCalendarHeaderStyles } from './styles';
import { Divider, useTheme } from '@mui/material';

type CustomPickersCalendarHeaderProps = {
  currentMonth: Date;
  onMonthChange: (date: Date, slideDirection: SlideDirection) => void;
};

const CustomPickersCalendarHeader: React.FC<
  CustomPickersCalendarHeaderProps
> = ({ currentMonth, onMonthChange }) => {
  const theme = useTheme();
  return (
    <>
      <Box sx={CustomPickersCalendarHeaderStyles.wrapper}>
        <CustomButton
          iconColor={theme.palette.project_color_white.main}
          icon={ChevronLeftIcon}
          onClick={() => onMonthChange(addMonths(currentMonth, -1), 'right')}
        />
        <Box sx={CustomPickersCalendarHeaderStyles.text}>
          <Typography
            sx={CustomPickersCalendarHeaderStyles.textTitle}
            variant={'subtitle2'}
          >
            {format(currentMonth, 'MMMM')}
          </Typography>
          <Typography
            sx={CustomPickersCalendarHeaderStyles.textSubtitle}
            variant={'caption'}
          >
            {format(currentMonth, 'yyyy')}
          </Typography>
        </Box>
        <CustomButton
          iconColor={theme.palette.project_color_white.main}
          icon={ChevronRightIcon}
          onClick={() => onMonthChange(addMonths(currentMonth, 1), 'left')}
        />
      </Box>
      <Divider
        sx={CustomPickersCalendarHeaderStyles.divider}
        component="div"
        role="presentation"
      />
    </>
  );
};

export default CustomPickersCalendarHeader;
