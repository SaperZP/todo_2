import React from 'react';
import Box from '@mui/material/Box';
import { SvgIcon } from '@mui/material';
import Typography from '@mui/material/Typography';
import { badgeStyles } from './styles';
import { SystemStyleObject } from '@mui/system';

type BadgeProps = {
  wrapperSx: SystemStyleObject;
  icon: React.FC;
  iconSize: number;
  text: string | number;
};

const CustomBadge: React.FC<BadgeProps> = ({
  wrapperSx,
  icon,
  iconSize,
  text,
}) => {
  return (
    <Box sx={[badgeStyles.wrapper, wrapperSx]}>
      <SvgIcon
        inheritViewBox
        sx={{ width: iconSize, height: iconSize }}
        component={icon}
      />
      <Typography>{text}</Typography>
    </Box>
  );
};

export default CustomBadge;
