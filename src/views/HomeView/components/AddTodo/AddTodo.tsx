import React, { FormEvent, useState } from 'react';
import { ButtonGroup, FormControl, FormLabel } from '@mui/material';
import { addTodoStyles } from './styles';
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
import TimeModal from './components/TimeModal';
import TaskPriorityModal from './components/TaskPriorityModal';
import TaskCategoryModal from './components/TaskCategoryModal';
import { useAppDispatch } from '../../../../store/hooks';

const AddTodo = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState<Date | null>(new Date());
  const [taskPriority, setTaskPriority] = useState('');
  const [taskLabel, setTaskLabel] = useState('');
  const dispatch = useAppDispatch();

  const addTodoHandler = (event: FormEvent) => {
    event.preventDefault();
    const id = uuid();

    CustomDialogEvents.emit('addTodoModal', false);

    dispatch(
      addTodo({
        id,
        title: taskName,
        description: taskDescription,
        dueDate: taskDate ? taskDate.toString() : null,
        priority: taskPriority ? Number(taskPriority) : null,
        label: taskLabel ? taskLabel : null,
        isDone: false,
      })
    );

    setTaskName('');
    setTaskDescription('');
    setTaskDate(new Date());
  };

  return (
    <CustomDialog id={'addTodoModal'}>
      <form onSubmit={addTodoHandler}>
        <FormControl sx={addTodoStyles.formControl}>
          <FormLabel sx={addTodoStyles.legend} component={'legend'}>
            Add Task
          </FormLabel>

          <StyledTextField
            required
            autoComplete={'off'}
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            autoFocus
            label={'Task name'}
            id={'taskName'}
            placeholder={'Do math homework'}
          />

          <StyledTextField
            autoComplete={'off'}
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            label={'Task description'}
            id={'taskDescription'}
            placeholder={'Do chapter 2 to 5 for next week'}
          />

          <ButtonGroup sx={addTodoStyles.buttonGroup}>
            <CustomButton
              icon={ClockIcon}
              onClick={() => CustomDialogEvents.emit('datePickerModal', true)}
            />
            <CustomButton
              icon={TagIcon}
              onClick={() => CustomDialogEvents.emit('TaskCategoryModal', true)}
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
              // onClick={addTodoHandler}
            />
          </ButtonGroup>
        </FormControl>
      </form>

      <DateModal date={taskDate} onChange={setTaskDate} />
      <TimeModal date={taskDate} onSave={setTaskDate} />
      <TaskPriorityModal value={taskPriority} onSave={setTaskPriority} />
      <TaskCategoryModal value={taskLabel} onSave={setTaskLabel} />
    </CustomDialog>
  );
};

export default AddTodo;
