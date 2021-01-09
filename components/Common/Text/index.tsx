import React from "react";
import classNames from "classnames";

import styles from "./Text.module.scss";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  tagName?: keyof Pick<JSX.IntrinsicElements, "p" | "span">;
  size?: "large" | "medium" | "normal";
}

const TextEl: React.FC<TextProps> = ({
  tagName: El = "p",
  className,
  size = "large",
  children,
}) => {
  return (
    <El className={classNames(styles.text, styles[size], className)}>
      {children}
    </El>
  );
};

export { TextEl };
