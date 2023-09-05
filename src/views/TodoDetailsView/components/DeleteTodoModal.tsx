import React from 'react';
import CustomDialog from '../../../components/CustomDialog/CustomDialog';
import ModalPickersLayout from '../../../components/ModalPickersLayout/ModalPickersLayout';
import Typography from '@mui/material/Typography';
import CustomDialogEvents from '../../../components/CustomDialog/CustomDialogEvents';
import { deleteTodoModal } from '../styles';

type DeleteTodoModalProps = {
  onDelete: () => void;
};

const DeleteTodoModal: React.FC<DeleteTodoModalProps> = ({ onDelete }) => {
  return (
    <CustomDialog id={'deleteTodoModal'}>
      <ModalPickersLayout
        leftButton={{
          text: 'Cancel',
          callback: () => CustomDialogEvents.emit('deleteTodoModal', false),
        }}
        rightButton={{
          text: 'Delete',
          callback: onDelete,
        }}
        title={'Delete task'}
      >
        <Typography sx={deleteTodoModal.text}>
          Are You sure you want to delete this task?
        </Typography>
      </ModalPickersLayout>
    </CustomDialog>
  );
};

export default DeleteTodoModal;
