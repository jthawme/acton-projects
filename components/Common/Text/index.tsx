import React from "react";
import { useInView } from "react-intersection-observer";
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
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <El
      ref={ref}
      className={classNames(
        styles.text,
        { [styles.visible]: inView },
        styles[size],
        className
      )}
    >
      {children}
    </El>
  );
};

export { TextEl };
