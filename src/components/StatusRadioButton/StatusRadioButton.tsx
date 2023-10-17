import React from 'react';
import { Radio } from '@mui/material';
import { StatusRadioButtonStyles } from './styles';

type statusRadioButtonType = {
  todo: ToDo;
  updateStatus: (todoPart: Partial<ToDo>) => void;
};

const StatusRadioButton: React.FC<statusRadioButtonType> = ({
  todo,
  updateStatus,
}) => {
  const isCompleteHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    updateStatus({ isDone: !todo.isDone });
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
