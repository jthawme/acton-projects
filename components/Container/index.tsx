import React from "react";
import classNames from "classnames";

import styles from "./Container.module.scss";

interface ContainerInterface extends React.HTMLAttributes<HTMLElement> {
  tagName?: keyof Pick<
    JSX.IntrinsicElements,
    "section" | "div" | "span" | "main" | "header" | "footer"
  >;
  controlled?: boolean;
}

const Container: React.FC<ContainerInterface> = ({
  tagName: El = "div",
  className,
  children,
  controlled = true,
}) => {
  return (
    <El
      className={classNames(
        styles.container,
        { [styles.controlled]: controlled },
        className
      )}
    >
      {children}
    </El>
  );
};

export { Container };
