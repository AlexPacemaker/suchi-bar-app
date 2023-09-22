import React from "react";
import styles from "./Tag.module.scss";
import cn from "classnames";
import { ITag } from "./Tag.props";

const Tag = ({ children, size = "s", color = "ghost", href, className, ...props }: ITag): JSX.Element => {
  return (
    <div className={cn(styles.Tag, className, styles[size], styles[color])} {...props}>
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};

export default Tag;
