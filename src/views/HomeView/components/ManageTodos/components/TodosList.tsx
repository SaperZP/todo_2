import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import TodoItem from './TodoItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { todoListStyles } from '../styles';
import { Button, Collapse } from '@mui/material';

type todoListProps = {
  category: string;
  todosByCategory: ToDo[];
};

const TodosList: FC<todoListProps> = ({ category, todosByCategory }) => {
  const [open, setOpen] = useState(true);

  return (
    <Box sx={todoListStyles.todoListWrapper}>
      <Box>
        <Button
          variant={'contained'}
          sx={todoListStyles.hideButton}
          endIcon={open ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          onClick={() => setOpen((prevState) => !prevState)}
        >
          {category}
        </Button>
      </Box>
      <Collapse in={open} sx={todoListStyles.itemsWrapper}>
        {todosByCategory.map((todoByCategory) => (
          <TodoItem todo={todoByCategory} key={todoByCategory.id} />
        ))}
      </Collapse>
    </Box>
  );
};

export default TodosList;
