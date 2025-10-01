import React, { ReactNode } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import styles from "./HeaderContentLayoutStyles";

export interface HeaderContentLayoutProps {
  sideGutters?: boolean;
  fullWidthTable?: boolean;
  header?: ReactNode;
  children?: ReactNode;
  classes?: {
    header?: string;
    content?: string;
  };
  useDefaultView?: boolean;
}

const useStyles = makeStyles(styles);

/**
 * Component that takes up full page height and provides a padding.
 * @author dario
 */
const HeaderContentLayout = (props: HeaderContentLayoutProps): JSX.Element => {
  const defaultClasses = useStyles();

  const {
    header,
    children,
    sideGutters = true,
    classes,
    fullWidthTable = false,
    useDefaultView = false,
  } = props;

  return (
    <div
      className={clsx(defaultClasses.fullHeightLayout, {
        [defaultClasses.sideGutters]: sideGutters && !fullWidthTable,
        [defaultClasses.defaultView]: useDefaultView,
      })}
    >
      {header && (
        <div
          className={clsx(defaultClasses.header, classes?.header, {
            [defaultClasses.headerGutters]: fullWidthTable,
          })}
        >
          {header}
        </div>
      )}
      {children && (
        <div className={clsx(defaultClasses.content, classes?.content)}>
          {children}
        </div>
      )}
    </div>
  );
};

export default HeaderContentLayout;
