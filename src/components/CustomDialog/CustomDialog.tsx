import React, { useCallback, useEffect, useState } from 'react';
import { StyledDialog } from '../styledComponents';
import CustomDialogEvents from './CustomDialogEvents';

type CustomDialogProps = {
  id: string;
  persist?: boolean;
  children: React.ReactElement | React.ReactElement[];
};

/**
 * Custom pre-styled modal window.
 * Relies on MUI and Events packages
 * @param id - unique name of modal instance
 * @param persist
 * @param children
 *
 * to open or close modal use:
 *
 * CustomDialogEvents.emit(id, bool)
 */

const CustomDialog: React.FC<CustomDialogProps> = ({
  id,
  persist,
  children,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const listener = useCallback((args: boolean) => setModalOpen(args), []);

  useEffect(() => {
    CustomDialogEvents.on(id, listener);

    return () => {
      CustomDialogEvents.off(id, listener);
    };
  });

  return (
    <StyledDialog
      disableRestoreFocus
      open={modalOpen}
      onClose={() => !persist && CustomDialogEvents.emit(id, false)}
    >
      {modalOpen && children}
    </StyledDialog>
  );
};

export default CustomDialog;
