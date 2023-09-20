import React from "react";
import styles from './Button.module.scss'
import { IButton } from "./Button.props";
import cn from "classnames";

const Button = ({ appearence, children }: IButton): JSX.Element => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
