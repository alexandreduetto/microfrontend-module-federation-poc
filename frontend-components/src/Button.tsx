import React, { forwardRef } from "react";
import {
  ButtonProps as MuiButtonProps,
  Button as MuiButton,
} from "@material-ui/core";

export type ButtonProps = MuiButtonProps & {
  component?: React.ElementType;
};

/**
 * Duetto style button
 * Typescript fix: @see https://material-ui.com/guides/typescript/#usage-of-component-prop
 * @author andrew.lai
 * @param props
  Create a refObject passed from the reactRef
  to the  Material UI ref Complains using RefObject, being a DOM dynamic property
  the must closely approach might be
  @see https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref/58473012
*/

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { variant, ...rest } = props;

  switch (variant) {
    case "contained": {
      return (
        <MuiButton
          variant="contained"
          color="primary"
          size="small"
          ref={ref}
          {...rest}
        />
      );
    }
    case "outlined": {
      return <MuiButton variant="outlined" size="small" ref={ref} {...rest} />;
    }
    default: {
      return <MuiButton color="primary" size="small" ref={ref} {...rest} />;
    }
  }
});

export default Button;
