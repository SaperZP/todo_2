import React, { useRef } from 'react';
import CustomDialog from '../../../components/CustomDialog/CustomDialog';
import ModalPickersLayout from '../../../components/ModalPickersLayout/ModalPickersLayout';
import { StyledTextField } from '../../../components/styledComponents';
import { FormControl, Theme } from '@mui/material';
import ModalButtons from '../../../components/ModalButtons';
import CustomDialogEvents from '../../../components/CustomDialog/CustomDialogEvents';

type EditTodoModalProps = {
  prepareToEdit: (toEditPart: Partial<ToDo>) => void;
  updateTodoHandler: (value: Partial<ToDo>) => void;
  taskName: string;
  taskDescription: string | null;
};

const EditTodoModal: React.FC<EditTodoModalProps> = ({
  prepareToEdit,
  updateTodoHandler,
  taskName,
  taskDescription,
}) => {
  const initialValues = useRef({ taskName, taskDescription });

  const nameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    prepareToEdit({ title: event.target.value });
  };
  const descriptionChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    prepareToEdit({ description: event.target.value });
  };

  const CancelHandler = () => {
    prepareToEdit({ title: initialValues.current.taskName });
    prepareToEdit({ description: initialValues.current.taskDescription });
    CustomDialogEvents.emit('EditTodoModal', false);
  };
  const editHandler = () => {
    updateTodoHandler({ title: taskName, description: taskDescription });
    initialValues.current = { taskName, taskDescription };
    CustomDialogEvents.emit('EditTodoModal', false);
  };

  return (
    <CustomDialog persist id={'EditTodoModal'}>
      <ModalPickersLayout title={'Edit task'}>
        <form>
          <FormControl
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              color: (theme: Theme) => theme.palette.project_color_white.main,
              padding: '24px 16px 17px 16px',
            }}
          >
            <StyledTextField
              label={'Task name'}
              id={'taskName'}
              placeholder={'Do math homework'}
              autoComplete={'off'}
              autoFocus
              value={taskName}
              onChange={nameChangeHandler}
            />

            <StyledTextField
              label={'Task description'}
              id={'taskDescription'}
              placeholder={'Do chapter 2 to 5 for next week'}
              autoComplete={'off'}
              value={taskDescription}
              onChange={descriptionChangeHandler}
            />
          </FormControl>

          <ModalButtons
            leftButton={{ text: 'Cancel', callback: CancelHandler }}
            rightButton={{ text: 'Edit', callback: editHandler }}
          />
        </form>
      </ModalPickersLayout>
    </CustomDialog>
  );
};

export default EditTodoModal;
