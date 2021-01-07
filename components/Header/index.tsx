import React from "react";
import classNames from "classnames";

import { Container } from "../Container";
import { Logo } from "../Logo";

import styles from "./Header.module.scss";

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

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <div className={styles.logoEl}>
          <Logo className={styles.logo} />
        </div>
        <nav className={styles["links-nav"]}>
          {MENU_ITEMS.map((item) => (
            <div
              className={classNames(styles.item, { [styles.active]: false })}
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
