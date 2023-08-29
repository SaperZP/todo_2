import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { todosListStyles } from './styles';
import { StyledTextField } from '../../../../components/styledComponents';
import { InputAdornment } from '@mui/material';
import { ReactComponent as MagCustomIcon } from '../../../../assets/icons/mag.svg';

type TodosListProps = {
  todos: ToDo[];
};

const TodoList: React.FC<TodosListProps> = () => {
  const [searchString, setSearchString] = useState('');
  return (
    <Box sx={todosListStyles.wrapper}>
      <StyledTextField
        className={'here'}
        sx={todosListStyles.textField}
        fullWidth
        onChange={(event) => setSearchString(event.target.value)}
        value={searchString}
        label={'Search for your task...'}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MagCustomIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default TodoList;
