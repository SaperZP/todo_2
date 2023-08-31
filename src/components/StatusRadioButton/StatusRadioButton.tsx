import React from 'react';
import { Radio } from '@mui/material';
import { StatusRadioButtonStyles } from './styles';
import { useAppDispatch } from '../../store/hooks';
import { editTodo } from '../../store/todosReducer';

type statusRadioButtonType = {
  todo: ToDo;
};

const StatusRadioButton: React.FC<statusRadioButtonType> = ({ todo }) => {
  const dispatch = useAppDispatch();

  const isCompleteHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    dispatch(
      editTodo({
        todoId: todo.id,
        todoProp: { isDone: !todo.isDone },
      })
    );
  };

  return (
    <Radio
      checked={todo.isDone}
      onClick={isCompleteHandler}
      sx={StatusRadioButtonStyles.radioButton}
    />
  );
};

export default StatusRadioButton;
