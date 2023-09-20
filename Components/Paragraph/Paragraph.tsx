import React from "react";
import styles from "./Paragraph.module.scss";
import cn from "classnames";
import { IParagraphProps } from "./Paragraph.props";

const Paragraph = ({ size, children }: IParagraphProps): JSX.Element => {
  return <p className={cn(styles.Paragraph, styles[size])}>{children}</p>;
};

export default Paragraph;
