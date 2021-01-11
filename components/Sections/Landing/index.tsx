import React, { useRef, useCallback, useEffect, useState } from "react";
import classNames from "classnames";

import { TextEl } from "../../Common/Text";
import { Container } from "../../Container";
import { Logo } from "../../Logo";

import styles from "./Landing.module.scss";
import { useSiteContext } from "../../SiteContext";
import { useTransitionMount } from "../../../utils/hooks";

const Landing = () => {
  const { isTop, observeElement, virtualSplash } = useSiteContext();
  const transitionMount = useTransitionMount();
  const unobserve = useRef(() => {});
  const [show, setShow] = useState(false);

  const onRef = useCallback((ref) => {
    if (ref) {
      unobserve.current = observeElement(ref);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 500);
    return unobserve.current;
  }, []);

  return (
    <section
      ref={onRef}
      id="landing"
      className={classNames(
        styles.section,
        { [styles.show]: !virtualSplash },
        { [styles.transition]: transitionMount }
      )}
    >
      <Container className={styles.container}>
        <div className={styles.logoWrapper}>
          <Logo
            className={classNames(styles.logo, {
              [styles.hide]: !isTop || virtualSplash,
            })}
          />
        </div>

        {show && (
          <TextEl className={styles.text}>
            Acton Projects is a new construction company with many years of
            experience. We bring a personal touch to residential, commercial and
            public sector building.{" "}
          </TextEl>
        )}
      </Container>
    </section>
  );
};

export { Landing };
