import React from "react";
import styles from "./Paragraph.module.scss";
import cn from "classnames";
import { IParagraphProps } from "./Paragraph.props";

const Paragraph = ({
  size,
  children,
  className,
  ...props
}: IParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(styles.Paragraph, className, {
        [styles.s]: size == "s",
        [styles.m]: size == "m",
        [styles.l]: size == "l",
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
