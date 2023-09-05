import React, { FormEvent, useRef, useState } from 'react';
import { ButtonGroup, FormControl, FormLabel } from '@mui/material';
import { addTodoModalStyles } from './styles';
import { StyledTextField } from '../../../../components/styledComponents';
import CustomButton from '../../../../components/CustomButton';
import { ReactComponent as ClockIcon } from '../../../../assets/icons/clock.svg';
import { ReactComponent as TagIcon } from '../../../../assets/icons/label.svg';
import { ReactComponent as FlagIcon } from '../../../../assets/icons/flag.svg';
import { ReactComponent as SendIcon } from '../../../../assets/icons/send.svg';
import { addTodo } from '../../../../store/todosReducer';
import uuid from 'react-uuid';
import CustomDialog from '../../../../components/CustomDialog/CustomDialog';
import CustomDialogEvents from '../../../../components/CustomDialog/CustomDialogEvents';
import DateModal from './components/DateModal';
import TaskPriorityModal from './components/TaskPriorityModal';
import TaskCategoryModal from './components/TaskCategoryModal';
import { useAppDispatch } from '../../../../store/hooks';
import { dateToISO } from '../../../../utils/dateUtils';

const emptyTodo = {
  id: '',
  title: '',
  description: '',
  dueDate: dateToISO(new Date()),
  priority: null,
  categoryId: null,
  isDone: false,
};

const AddTodoModal = () => {
  const [newTodo, setNewTodo] = useState<ToDo>(emptyTodo);

  const dispatch = useAppDispatch();

  const changeTextHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    todoKey: keyof ToDo
  ) => {
    setNewTodo((prevState) => ({
      ...prevState,
      [todoKey]: event.target.value,
    }));
  };

  const onChangeTaskDetails = (toEditPart: Partial<ToDo>) => {
    setNewTodo((prevState) => {
      return { ...prevState, ...toEditPart };
    });
  };

  const addTodoHandler = (event: FormEvent) => {
    event.preventDefault();
    const id = uuid();

    CustomDialogEvents.emit('addTodoModal', false);

    dispatch(
      addTodo({
        ...newTodo,
        id,
      })
    );
    setNewTodo(emptyTodo);
  };

  return (
    <CustomDialog id={'addTodoModal'}>
      <form onSubmit={addTodoHandler}>
        <FormControl sx={addTodoModalStyles.formControl}>
          <FormLabel sx={addTodoModalStyles.legend} component={'legend'}>
            Add Task
          </FormLabel>

          <StyledTextField
            required
            autoComplete={'off'}
            value={newTodo.title}
            onChange={(event) => changeTextHandler(event, 'title')}
            autoFocus
            label={'Task name'}
            id={'taskName'}
            placeholder={'Do math homework'}
          />

          <StyledTextField
            autoComplete={'off'}
            value={newTodo.description}
            onChange={(event) => changeTextHandler(event, 'description')}
            label={'Task description'}
            id={'taskDescription'}
            placeholder={'Do chapter 2 to 5 for next week'}
          />

          <ButtonGroup sx={addTodoModalStyles.buttonGroup}>
            <CustomButton
              icon={ClockIcon}
              onClick={() => CustomDialogEvents.emit('datePickerModal', true)}
            />
            <CustomButton
              icon={TagIcon}
              onClick={() => CustomDialogEvents.emit('taskCategoryModal', true)}
            />
            <CustomButton
              icon={FlagIcon}
              onClick={() => CustomDialogEvents.emit('taskPriorityModal', true)}
            />
            <CustomButton
              muiButtonProps={{ type: 'submit' }}
              icon={SendIcon}
              containerSx={{
                justifyContent: 'end',
                flexGrow: 1,
              }}
            />
          </ButtonGroup>
        </FormControl>
      </form>

      <DateModal date={newTodo.dueDate} onSetDate={onChangeTaskDetails} />
      <TaskPriorityModal
        taskPriority={newTodo.priority}
        onSetPriority={onChangeTaskDetails}
      />
      <TaskCategoryModal
        taskCategoryId={newTodo.categoryId}
        onSetCategory={onChangeTaskDetails}
      />
    </CustomDialog>
  );
};

export default AddTodoModal;
