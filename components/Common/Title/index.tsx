import React from "react";
import classNames from "classnames";

import styles from "./Title.module.scss";

interface TitleProps extends React.HTMLAttributes<HTMLElement> {
  tagName?: keyof Pick<
    JSX.IntrinsicElements,
    "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
  >;
  size?: "normal" | "large";
}

const TitleEl: React.FC<TitleProps> = ({
  tagName: El = "p",
  className,
  size = "normal",
  children,
}) => {
  return (
    <El className={classNames(styles.title, styles[size], className)}>
      {children}
    </El>
  );
};

export { TitleEl };
