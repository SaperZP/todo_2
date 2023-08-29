import React from 'react';
import Box from '@mui/material/Box';
import { SvgIcon } from '@mui/material';
import { ReactComponent as NoTaskIcon } from '../../../../assets/icons/noTask.svg';
import Typography from '@mui/material/Typography';
import { noTodosStyles } from './styles';

const NoTodos = () => {
  return (
    <Box sx={noTodosStyles.box}>
      <SvgIcon sx={noTodosStyles.icon} inheritViewBox component={NoTaskIcon} />

      <Typography sx={noTodosStyles.title} color={'white'} variant={'h6'}>
        What do you want to do today?
      </Typography>

      <Typography sx={noTodosStyles.subtitle}>
        Tap + to add your tasks
      </Typography>
    </Box>
  );
};

export default NoTodos;
