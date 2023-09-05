import React from 'react';
import Box from '@mui/material/Box';
import { ButtonBase } from '@mui/material';
import Typography from '@mui/material/Typography';
import categoriesList from '../../../../../utils/categoriesList';
import { todoItemStyles } from '../styles';
import { ReactComponent as FlagCustomIcon } from '../../../../../assets/icons/flag.svg';
import CustomBadge from '../../../../../components/Badge/CustomBadge';
import { useNavigate } from 'react-router-dom';
import StatusRadioButton from '../../../../../components/StatusRadioButton/StatusRadioButton';
import { getReadableDate } from '../../../../../utils/dateUtils';

type todoItemProps = {
  todo: ToDo;
};

const TodoItem: React.FC<todoItemProps> = ({ todo }) => {
  const navigate = useNavigate();

  const Category = () => {
    const matchedCategory = categoriesList.find(
      (category) => category.id === todo.categoryId
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

  const handleTodoClick = () => {
    navigate(`task/${todo.id}`);
  };

  return (
    <ButtonBase onClick={handleTodoClick} sx={todoItemStyles.wrapper}>
      <Box sx={todoItemStyles.radioButtonWrapper}>
        <StatusRadioButton todo={todo} />
      </Box>
      <Box sx={todoItemStyles.mainContentWrapper}>
        <Typography sx={todoItemStyles.title}>{todo.title}</Typography>
        <Box sx={todoItemStyles.mainContentBottom}>
          <Typography sx={todoItemStyles.dateText} variant={'subtitle2'}>
            {getReadableDate(todo.dueDate)}
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
    </ButtonBase>
  );
};

export default TodoItem;
