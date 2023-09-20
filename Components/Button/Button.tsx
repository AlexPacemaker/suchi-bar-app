import React from "react";
import styles from "./Button.module.scss";
import { IButton } from "./Button.props";
import cn from "classnames";

const Button = ({ appearence, children }: IButton): JSX.Element => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: appearence == "primary",
        [styles.ghost]: appearence == "ghost",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
