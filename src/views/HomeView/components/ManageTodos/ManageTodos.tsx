import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { manageTodosStyles } from './styles';
import { StyledTextField } from '../../../../components/styledComponents';
import { InputAdornment } from '@mui/material';
import { ReactComponent as MagCustomIcon } from '../../../../assets/icons/mag.svg';
import TodosList from './components/TodosList';
import { useAppSelector } from '../../../../store/hooks';
import { useDebouncedCallback } from 'use-debounce';

type TodosListProps = {
  todos: ToDo[];
};

interface categoryType {
  [key: string]: ToDo[];
}

const ManageTodos: React.FC<TodosListProps> = () => {
  const { todos } = useAppSelector((state) => state.todosData);
  const [searchString, setSearchString] = useState('');
  const [matchedTodos, setMatchedTodos] = useState(todos);

  const matchWithDelay = useDebouncedCallback(
    (searchResult: string) =>
      setMatchedTodos(
        todos.filter((todo) => todo.title.includes(searchResult))
      ),
    600
  );

  const categories = matchedTodos.reduce((acc: categoryType, todo) => {
    const categoryToUse = todo.isDone ? 'completed' : 'todo';

    if (!acc[categoryToUse]) {
      acc[categoryToUse] = [];
    }

    acc[categoryToUse].push(todo);

    return acc;
  }, {});

  const changeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchString(event.target.value);
    matchWithDelay(event.target.value);
  };

  useEffect(() => {
    setMatchedTodos(todos);
  }, [todos]);

  return (
    <Box sx={manageTodosStyles.wrapper}>
      <StyledTextField
        className={'here'}
        sx={manageTodosStyles.textField}
        fullWidth
        onChange={changeHandler}
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

      {Object.keys(categories).map((key) => (
        <TodosList key={key} category={key} todosByCategory={categories[key]} />
      ))}
    </Box>
  );
};

export default ManageTodos;
