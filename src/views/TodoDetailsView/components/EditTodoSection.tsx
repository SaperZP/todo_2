import React from 'react';
import Box from '@mui/material/Box';
import { Button, SvgIcon } from '@mui/material';
import Typography from '@mui/material/Typography';
import { editTodoSection } from '../styles';

type EditTodoSectionProps = {
  sectionName: string;
  icon: React.FC;
  onClick: () => void;
  value?: string;
  valueIcon?: React.FC;
};

const EditTodoSection: React.FC<EditTodoSectionProps> = ({
  onClick,
  icon,
  valueIcon,
  value,
  sectionName,
}) => {
  return (
    <Box sx={editTodoSection.wrapper}>
      <Box sx={editTodoSection.section}>
        <SvgIcon component={icon} />
        <Typography>{sectionName}</Typography>
      </Box>

      <Button
        onClick={onClick}
        sx={editTodoSection.editSectionButton}
        variant={'contained'}
        startIcon={
          valueIcon && <SvgIcon inheritViewBox component={valueIcon} />
        }
      >
        {value}
      </Button>
    </Box>
  );
};

export default EditTodoSection;
