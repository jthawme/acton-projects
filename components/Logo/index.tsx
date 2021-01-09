import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";

import { ReactComponent as LogoMarkSvg } from "../../assets/logo-mark.svg";
import { ReactComponent as LogoTextSvg } from "../../assets/logo-text.svg";

import styles from "./Logo.module.scss";

interface LogoInterface extends React.HTMLAttributes<HTMLDivElement> {
  side?: boolean;
  height?: boolean;
  withText?: boolean;
}

const Logo: React.FC<LogoInterface> = ({
  className,
  height,
  withText = true,
  side,
}) => {
  return (
    <div
      className={classNames(
        styles.logo,
        { [styles.height]: height },
        className
      )}
    >
      <LogoMarkSvg className={styles["logo-mark"]} />

      {withText && (
        <>
          <AnimatePresence initial={false}>
            {side && (
              <motion.div
                initial={{ opacity: 0, y: "-30%" }}
                animate={{ opacity: 1, y: "-50%" }}
                exit={{ opacity: 0, y: "-30%" }}
                transition={{
                  duration: 0.75,
                  ease: "easeOut",
                }}
                className={classNames(styles.logoText, styles.logoTextRight)}
              >
                <LogoTextSvg />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence initial={false}>
            {!side && (
              <motion.div
                initial={{ opacity: 0, y: "20%" }}
                animate={{ opacity: 1, y: "0" }}
                exit={{ opacity: 0, y: "20%" }}
                transition={{
                  duration: 0.75,
                  ease: "easeOut",
                }}
                className={classNames(styles.logoText, styles.logoTextBottom)}
              >
                <LogoTextSvg />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export { Logo };
