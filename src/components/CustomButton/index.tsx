import React, { useCallback } from 'react';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { SvgIcon } from '@mui/material';
import Box from '@mui/material/Box';
import { customButtonStyles } from './styles';
import { SystemStyleObject } from '@mui/system';

interface CustomButtonProps {
  onClick?: () => void;
  containerSx?: SystemStyleObject;
  textSx?: SystemStyleObject;
  icon?: React.FC;
  iconSize?: number;
  iconColor?: string;
  text?: string;
  textPosition?: 'top' | 'bottom' | 'left' | 'right';
  muiButtonProps?: IconButtonProps;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  containerSx,
  textSx,
  icon: Icon,
  iconSize,
  text,
  textPosition,
  iconColor,
  muiButtonProps,
}) => {
  const textLocation = useCallback(() => {
    {
      switch (textPosition) {
        case 'top': {
          return { flexDirection: 'column-reverse' };
        }
        case 'bottom': {
          return { flexDirection: 'column' };
        }
        case 'left': {
          return { flexDirection: 'row-reverse' };
        }
        case 'right': {
          return { flexDirection: 'row' };
        }
        default:
          return { flexDirection: 'initial' };
      }
    }
  }, [textPosition]);

  return (
    <Box
      onClick={onClick}
      sx={[customButtonStyles.box, textLocation, !!containerSx && containerSx]}
    >
      <IconButton color={'inherit'} onClick={onClick} {...muiButtonProps}>
        {Icon && (
          <SvgIcon
            inheritViewBox
            sx={{ color: iconColor, width: iconSize, height: iconSize }}
            component={Icon}
          />
        )}
      </IconButton>
      {text && (
        <Typography
          variant="body1"
          onClick={onClick}
          sx={[customButtonStyles.text, !!textSx && textSx]}
        >
          {text}
        </Typography>
      )}
    </Box>
  );
};

export default CustomButton;
