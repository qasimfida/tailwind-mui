import React from 'react';
import { Button } from '@material-ui/core';

type ButtonProps = {
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'inherit' | 'primary' | 'secondary';
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

const GButton = ({variant = 'contained', color = 'primary', onClick, disabled, fullWidth, className, children}: ButtonProps) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      className={className}
    >
      {children}
    </Button>
  )
}

export default GButton;
