import React from "react";
import DuettoButton from "frontend-components/Button";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <DuettoButton variant="contained" onClick={onClick}>
      {text} (on App 1)
    </DuettoButton>
  );
};

export default Button;
