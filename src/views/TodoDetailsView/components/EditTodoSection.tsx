import React from 'react';
import Box from '@mui/material/Box';
import { Button, SvgIcon } from '@mui/material';
import Typography from '@mui/material/Typography';

type EditTodoSectionProps = {
  icon: React.FC;
  sectionName: string;
  value?: string;
  valueIcon?: React.FC;
};

const EditTodoSection: React.FC<EditTodoSectionProps> = ({
  icon,
  valueIcon,
  value,
  sectionName,
}) => {
  return (
    <Box>
      <Box>
        <SvgIcon component={icon} />
        <Typography>{sectionName}</Typography>
      </Box>

      <Button startIcon={valueIcon && <SvgIcon component={valueIcon} />}>
        {value}
      </Button>
    </Box>
  );
};

export default EditTodoSection;
