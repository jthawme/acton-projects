import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { Container } from "../Container";
import { Logo } from "../Logo";

import styles from "./Header.module.scss";
import { tickUpdate } from "../../utils/utils";
import { useSiteContext } from "../SiteContext";

const MENU_ITEMS = [
  {
    to: "/#about",
    label: "About",
  },
  {
    to: "/#service",
    label: "Service",
  },
  {
    to: "/#contacts",
    label: "Contacts",
  },
];

const TOP_THRESHOLD = 100;

const Header = () => {
  const { isTop, setIsTop } = useSiteContext();

  useEffect(() => {
    const cb = tickUpdate(() => {
      setIsTop(window.scrollY < TOP_THRESHOLD);
    });

    window.addEventListener("scroll", cb, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", cb);
    };
  }, []);

  return (
    <header
      className={classNames(styles.header, { [styles["not-top"]]: !isTop })}
    >
      <Container className={styles.inner}>
        <div className={styles.logoEl}>
          {/* <Logo className={styles.logo} side={!isTop} /> */}
          <Logo className={styles.fixedLogo} height side withText={false} />
        </div>
        <nav className={styles["links-nav"]}>
          {MENU_ITEMS.map((item) => (
            <div
              className={classNames(styles.item, "alt-text", "small", {
                [styles.active]: false,
              })}
              key={item.to}
            >
              <a href={item.to}>{item.label}</a>
            </div>
          ))}
        </nav>
      </Container>
    </header>
  );
};

export { Header };
