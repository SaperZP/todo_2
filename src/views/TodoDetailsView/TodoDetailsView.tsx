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
import { editTodo, deleteTodo } from '../../store/todosReducer';
import CustomDialogEvents from '../../components/CustomDialog/CustomDialogEvents';
import EditTodoSection from './components/EditTodoSection';
import { ReactComponent as ClockCustomIcon } from '../../assets/icons/clock.svg';
import { ReactComponent as TagCustomIcon } from '../../assets/icons/label.svg';
import { ReactComponent as FlagCustomIcon } from '../../assets/icons/flag.svg';
import { ReactComponent as TrashCustomIcon } from '../../assets/icons/trash.svg';
import categoriesList from '../../utils/categoriesList';
import { getReadableDate } from '../../utils/dateUtils';
import DateModal from '../HomeView/components/AddTodoModal/components/DateModal';
import TaskCategoryModal from '../HomeView/components/AddTodoModal/components/TaskCategoryModal';
import TaskPriorityModal from '../HomeView/components/AddTodoModal/components/TaskPriorityModal';

const TodoDetailsView = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { todos } = useAppSelector((state) => state.todosData);
  const [toEdit, setToEdit] = useState(() =>
    todos.find((todo) => todo.id === taskId)
  );
  const category = categoriesList.find(
    (category) => category.id === toEdit?.categoryId
  );

  const handleClose = () => {
    navigate('/');
  };

  const prepareToEdit = (toEditPart: Partial<ToDo>) => {
    setToEdit((prevState) =>
      prevState ? { ...prevState, ...toEditPart } : undefined
    );
  };

  const updateTodo = (todoPart: Partial<ToDo>) =>
    taskId &&
    dispatch(
      editTodo({
        todoId: taskId,
        todoProp: todoPart,
      })
    );

  const deleteToDo = () => {
    if (taskId) {
      dispatch(deleteTodo({ todoId: taskId }));
      navigate('/');
    }
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
            onClick={() => CustomDialogEvents.emit('datePickerModal', true)}
            icon={ClockCustomIcon}
            sectionName={'Task Time:'}
            value={getReadableDate(toEdit.dueDate)}
          />

          <EditTodoSection
            onClick={() => CustomDialogEvents.emit('taskCategoryModal', true)}
            icon={TagCustomIcon}
            sectionName={'Task Category:'}
            value={category?.name}
            valueIcon={category?.icon}
          />

          <EditTodoSection
            onClick={() => CustomDialogEvents.emit('taskPriorityModal', true)}
            icon={FlagCustomIcon}
            sectionName={'Task Priority:'}
            value={toEdit.priority ? toEdit.priority.toString() : 'No priority'}
          />

          <CustomButton
            muiButtonProps={{ sx: { padding: '0 8px 0 0' } }}
            icon={TrashCustomIcon}
            textPosition={'right'}
            textSx={{ color: 'red' }}
            onClick={deleteToDo}
            text={'Delete Task'}
          />

          <EditTodoModal
            taskName={toEdit.title}
            taskDescription={toEdit.description}
            prepareToEdit={prepareToEdit}
            updateTodoHandler={updateTodo}
          />

          <DateModal
            date={toEdit.dueDate}
            onSetDate={prepareToEdit}
            updateTodo={updateTodo}
          />
          <TaskCategoryModal
            taskCategoryId={toEdit.categoryId}
            onSetCategory={prepareToEdit}
            updateTodo={updateTodo}
          />
          <TaskPriorityModal
            taskPriority={toEdit.priority}
            onSetPriority={prepareToEdit}
            updateTodo={updateTodo}
          />
        </>
      ) : (
        'error - no todo'
      )}
    </StyledContainer>
  );
};

export default TodoDetailsView;
