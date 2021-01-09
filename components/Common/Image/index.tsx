import React, { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./Image.module.scss";
import { loadImage } from "../../../utils/promises";

interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  label?: string;
  src: string;
  alt: string;
  ratio: number;
  color: string;
}

const ImageEl: React.FC<ImageProps> = ({
  className,
  label,
  ratio,
  color,
  src,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [internalSrc, setInternalSrc] = useState("");

  useEffect(() => {
    setLoaded(false);
    loadImage(src).then(() => {
      setLoaded(true);
      setInternalSrc(src);
    });
  }, [src]);

  return (
    <div
      style={
        {
          "--image-ratio": ratio,
          "--image-color": color,
        } as React.CSSProperties
      }
      className={classNames(
        styles.image,
        { [styles.loaded]: loaded },
        className
      )}
    >
      {label && (
        <span className={classNames(styles.label, "alt-text", "small")}>
          {label}
        </span>
      )}
      <img src={internalSrc} {...props} />
    </div>
  );
};

export { ImageEl };
