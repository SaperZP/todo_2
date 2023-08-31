import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import { todoDetailsStyles } from '../styles';
import { StyledContainer } from '../../../../../components/styledComponents';
import CustomButton from '../../../../../components/CustomButton';
import StatusRadioButton from '../../../../../components/StatusRadioButton/StatusRadioButton';
import { useAppSelector } from '../../../../../store/hooks';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { ReactComponent as EdicCustomIcon } from '../../../../../assets/icons/edit.svg';

const TodoDetails = () => {
  const navigate = useNavigate();
  const { taskId } = useParams();
  const { todos } = useAppSelector((state) => state.todosData);
  const selectedTodo = todos.find((todo) => todo.id === taskId);

  const handleClose = () => {
    navigate('/');
  };

  return (
    <StyledContainer sx={todoDetailsStyles.container} maxWidth={'sm'}>
      {selectedTodo ? (
        <>
          <Box sx={todoDetailsStyles.header}>
            <CustomButton
              onClick={handleClose}
              containerSx={todoDetailsStyles.closeButton}
              icon={CloseIcon}
            />
          </Box>

          <Box sx={todoDetailsStyles.mainDetails}>
            <Box>
              <StatusRadioButton todo={selectedTodo} />
            </Box>

            <Box sx={todoDetailsStyles.mainDetailsText}>
              <Typography variant={'h6'} sx={todoDetailsStyles.taskName}>
                {selectedTodo.title}
              </Typography>
              <Typography sx={todoDetailsStyles.taskDescription}>
                {selectedTodo.description}
              </Typography>
            </Box>

            <Box>
              <CustomButton icon={EdicCustomIcon} />
            </Box>
          </Box>
        </>
      ) : (
        'error - no todo'
      )}
    </StyledContainer>
  );
};

export default TodoDetails;
