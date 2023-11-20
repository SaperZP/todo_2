import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import { todoDetailsStyles } from './styles';
import { StyledContainer } from '../../components/styledComponents';
import CustomButton from '../../components/CustomButton';
import StatusRadioButton from '../../components/StatusRadioButton/StatusRadioButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { ReactComponent as EditCustomIcon } from '../../assets/icons/edit.svg';
import EditTodoModal from './components/EditTodoModal';
import CustomDialogEvents from '../../components/CustomDialog/CustomDialogEvents';
import EditTodoSection from './components/EditTodoSection';
import { ReactComponent as ClockCustomIcon } from '../../assets/icons/clock.svg';
import { ReactComponent as TagCustomIcon } from '../../assets/icons/label.svg';
import { ReactComponent as FlagCustomIcon } from '../../assets/icons/flag.svg';
import { ReactComponent as TrashCustomIcon } from '../../assets/icons/trash.svg';
import categoriesList from '../../utils/categoriesList';
import { getReadableDate } from '../../utils/dateUtils';
import DateModal from '../../components/DateModal';
import TaskCategoryModal from '../../components/TaskCategoryModal';
import TaskPriorityModal from '../../components/TaskPriorityModal';
import DeleteTodoModal from './components/DeleteTodoModal';
import { useMutation, useQuery } from '@apollo/client';
import GET_TODO from '../../graphql/queries/getTodo';
import DELETE_TODO from '../../graphql/mutations/deleteTodo';
import UPDATE_TODO from '../../graphql/mutations/updateTodo';

const TodoDetailsView = () => {
  const { taskId } = useParams() as { taskId: string };
  const navigate = useNavigate();
  const [updateTodo] = useMutation(UPDATE_TODO);
  const [deleteTodo] = useMutation(DELETE_TODO);
  const { data, loading: loadingTodo } = useQuery(GET_TODO, {
    variables: { getTodoId: taskId },
  });
  const [toEdit, setToEdit] = useState<ToDo | undefined>();

  const category = categoriesList.find(
    (category) => category.id === toEdit?.categoryId
  );

  useEffect(() => {
    setToEdit(data?.getTodo);
  }, [data]);

  const handleClose = () => {
    navigate('/');
  };

  const prepareToEdit = (toEditPart: Partial<ToDo>) => {
    setToEdit((prevState) =>
      prevState ? { ...prevState, ...toEditPart } : undefined
    );
  };

  const updateTodoHandler = (todoPart: Partial<ToDo>) => {
    updateTodo({
      variables: {
        updateToDoId: taskId,
        input: todoPart,
      },
    });
  };

  const deleteTodoHandler = () => {
    deleteTodo({
      variables: {
        deleteToDoId: taskId,
      },
    });

    handleClose();
  };

  const handleOpenEditTodo = () => {
    CustomDialogEvents.emit('EditTodoModal', true);
  };

  if (!taskId) {
    return <Typography color={'red'}> Wrong task id</Typography>;
  }

  return (
    <StyledContainer sx={todoDetailsStyles.container}>
      {toEdit && !loadingTodo ? (
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
              <StatusRadioButton
                todo={toEdit}
                updateStatus={updateTodoHandler}
              />
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
            onClick={() => CustomDialogEvents.emit('deleteTodoModal', true)}
            text={'Delete Task'}
          />

          <EditTodoModal
            taskName={toEdit.title}
            taskDescription={toEdit.description}
            prepareToEdit={prepareToEdit}
            updateTodoHandler={updateTodoHandler}
          />

          <DateModal
            date={toEdit.dueDate}
            onSetDate={prepareToEdit}
            updateTodo={updateTodoHandler}
          />
          <TaskCategoryModal
            taskCategoryId={toEdit.categoryId}
            onSetCategory={prepareToEdit}
            updateTodo={updateTodoHandler}
          />
          <TaskPriorityModal
            taskPriority={toEdit.priority}
            onSetPriority={prepareToEdit}
            updateTodo={updateTodoHandler}
          />
          <DeleteTodoModal onDelete={deleteTodoHandler} />
        </>
      ) : (
        <Typography color={'red'}> error - no todo</Typography>
      )}
    </StyledContainer>
  );
};

export default TodoDetailsView;
