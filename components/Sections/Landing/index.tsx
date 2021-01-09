import React from "react";
import classNames from "classnames";

import { TextEl } from "../../Common/Text";
import { Container } from "../../Container";
import { Logo } from "../../Logo";

import styles from "./Landing.module.scss";
import { useSiteContext } from "../../SiteContext";

const Landing = () => {
  const { isTop } = useSiteContext();

  return (
    <section id="landing" className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.logoWrapper}>
          <Logo
            className={classNames(styles.logo, { [styles.hide]: !isTop })}
          />
        </div>

        <TextEl className={styles.text}>
          Acton Projects is a new construction company with many years of
          experience. We bring a personal touch to residential, commercial and
          public sector building.{" "}
        </TextEl>
      </Container>
    </section>
  );
};

export { Landing };
