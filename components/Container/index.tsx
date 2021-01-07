import React from "react";
import classNames from "classnames";

import styles from "./Container.module.scss";

interface ContainerInterface extends React.HTMLAttributes<HTMLElement> {
  tagName?: keyof Pick<
    JSX.IntrinsicElements,
    "section" | "div" | "span" | "main" | "header" | "footer"
  >;
}

const Container: React.FC<ContainerInterface> = ({
  tagName: El = "div",
  className,
  children,
}) => {
  return (
    <El className={classNames(styles.container, className)}>{children}</El>
  );
};

export { Container };
