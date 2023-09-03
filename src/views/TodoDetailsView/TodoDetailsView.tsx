import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import { todoDetailsStyles } from './styles';
import { StyledContainer } from '../../components/styledComponents';
import CustomButton from '../../components/CustomButton';
import StatusRadioButton from '../../components/StatusRadioButton/StatusRadioButton';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { ReactComponent as EditCustomIcon } from '../../assets/icons/edit.svg';
import EditTodoModal from './components/EditTodoModal';
import { editTodo } from '../../store/todosReducer';
import CustomDialogEvents from '../../components/CustomDialog/CustomDialogEvents';
import EditTodoSection from './components/EditTodoSection';
import { ReactComponent as ClockCustomIcon } from '../../assets/icons/clock.svg';
import { ReactComponent as TagCustomIcon } from '../../assets/icons/label.svg';
import { ReactComponent as FlagCustomIcon } from '../../assets/icons/flag.svg';
import categoriesList from '../../utils/categoriesList';

const TodoDetailsView = () => {
  const navigate = useNavigate();
  const { taskId } = useParams();
  const { todos } = useAppSelector((state) => state.todosData);
  const dispatch = useAppDispatch();
  const [toEdit, setToEdit] = useState(() =>
    todos.find((todo) => todo.id === taskId)
  );
  const category = categoriesList.find(
    (category) => category.id === toEdit?.categoryID
  );

  const handleClose = () => {
    navigate('/');
  };

  const prepareToEdit = (toEditPart: Partial<ToDo>) => {
    setToEdit((prevState) =>
      prevState ? { ...prevState, ...toEditPart } : undefined
    );
  };

  const updateTodo = (todoProp: Partial<ToDo>) => {
    if (typeof taskId === 'string') {
      dispatch(
        editTodo({
          todoId: taskId,
          todoProp,
        })
      );
    } else alert('something went wrong - no todoId');
  };

  const handleOpenEditTodo = () => {
    CustomDialogEvents.emit('EditTodoModal', true);
  };

  return (
    <StyledContainer sx={todoDetailsStyles.container} maxWidth={'sm'}>
      {toEdit ? (
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
              <StatusRadioButton todo={toEdit} />
            </Box>

            <Box sx={todoDetailsStyles.mainDetailsText}>
              <Typography variant={'h6'} sx={todoDetailsStyles.taskName}>
                {toEdit.title}
              </Typography>
              <Typography sx={todoDetailsStyles.taskDescription}>
                {toEdit.description}
              </Typography>
            </Box>

            <Box>
              <CustomButton
                onClick={handleOpenEditTodo}
                icon={EditCustomIcon}
              />
            </Box>
          </Box>
          <EditTodoSection
            icon={ClockCustomIcon}
            sectionName={'Task Time:'}
            value={toEdit.dueDate ? toEdit.dueDate : 'No date'}
          />
          <EditTodoSection
            icon={TagCustomIcon}
            sectionName={'Task Category:'}
            value={category?.name}
            valueIcon={category?.icon}
          />
          <EditTodoSection
            icon={FlagCustomIcon}
            sectionName={'Task Priority:'}
            value={toEdit.priority ? toEdit.priority.toString() : 'No priority'}
          />

          <EditTodoModal
            taskName={toEdit.title}
            taskDescription={toEdit.description}
            prepareToEdit={prepareToEdit}
            updateTodoHandler={updateTodo}
          />
        </>
      ) : (
        'error - no todo'
      )}
    </StyledContainer>
  );
};

export default TodoDetailsView;
