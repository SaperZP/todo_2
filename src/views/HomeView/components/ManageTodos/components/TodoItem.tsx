import React from 'react';
import Box from '@mui/material/Box';
import { Radio } from '@mui/material';
import Typography from '@mui/material/Typography';
import { formatRelative } from 'date-fns';
import { enGB } from 'date-fns/locale';
import categoriesList from '../../../../../utils/categoriesList';
import { todoItemStyles } from '../styles';
import { ReactComponent as FlagCustomIcon } from '../../../../../assets/icons/flag.svg';
import CustomBadge from '../../../../../components/Badge/CustomBadge';
import { useAppDispatch } from '../../../../../store/hooks';
import { editTodo } from '../../../../../store/todosReducer';

type todoItemProps = {
  todo: ToDo;
};

const TodoItem: React.FC<todoItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();

  const date = todo.dueDate
    ? formatRelative(new Date(todo.dueDate), new Date(), { locale: enGB })
    : 'no date';

  const isCompleteHandler = () => {
    dispatch(
      editTodo({
        todoId: todo.id,
        todoProp: { isDone: !todo.isDone },
      })
    );
  };

  const Category = () => {
    const matchedCategory = categoriesList.find(
      (category) => category.id === todo.categoryID
    );

    return matchedCategory ? (
      <CustomBadge
        wrapperSx={{ backgroundColor: matchedCategory.backgroundColor }}
        icon={matchedCategory.icon}
        iconSize={14}
        text={matchedCategory.name}
      />
    ) : (
      <Typography>no category</Typography>
    );
  };

  return (
    <Box sx={todoItemStyles.wrapper}>
      <Box sx={todoItemStyles.radioButtonWrapper}>
        <Radio
          checked={todo.isDone}
          onClick={isCompleteHandler}
          sx={todoItemStyles.radioButton}
        />
      </Box>
      <Box sx={todoItemStyles.mainContentWrapper}>
        <Typography>{todo.title}</Typography>
        <Box sx={todoItemStyles.mainContentBottom}>
          <Typography sx={todoItemStyles.dateText} variant={'subtitle2'}>
            {date}
          </Typography>
          <Box sx={todoItemStyles.mainContentBadges}>
            <Category />
            <CustomBadge
              wrapperSx={todoItemStyles.priority}
              icon={FlagCustomIcon}
              iconSize={14}
              text={todo.priority ? todo.priority : 'no priority'}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TodoItem;
