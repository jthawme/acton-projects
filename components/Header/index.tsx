import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { Container } from "../Container";
import { Logo } from "../Logo";

import styles from "./Header.module.scss";
import { tickUpdate } from "../../utils/utils";
import { useSiteContext } from "../SiteContext";
import { InternalLink } from "../Common/InternalLink";
import { useTransitionMount } from "../../utils/hooks";

const MENU_ITEMS = [
  {
    id: "about",
    label: "About",
  },
  {
    id: "service",
    label: "Service",
  },
  {
    id: "contact",
    label: "Contacts",
  },
];

const TOP_THRESHOLD = 100;
const ABSOLUTE_TOP_THRESHOLD = 50;

const Header = () => {
  const {
    isTop,
    setIsTop,
    activeSection,
    virtualSplash,
    setIsAbsoluteTop,
  } = useSiteContext();
  const transitionMount = useTransitionMount();

  useEffect(() => {
    const cb = tickUpdate(() => {
      setIsTop(window.scrollY < TOP_THRESHOLD);
      setIsAbsoluteTop(window.scrollY < ABSOLUTE_TOP_THRESHOLD);
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
      className={classNames(
        styles.header,
        { [styles["not-top"]]: !isTop },
        { [styles.transition]: transitionMount },
        { [styles.show]: !virtualSplash }
      )}
    >
      <Container className={styles.inner}>
        <InternalLink href="/#landing" className={styles.logoEl}>
          {/* <Logo className={styles.logo} side={!isTop} /> */}
          <Logo className={styles.fixedLogo} height side withText={false} />
        </InternalLink>
        <nav className={styles["links-nav"]}>
          {MENU_ITEMS.map((item) => (
            <div
              className={classNames(styles.item, "alt-text", "small", {
                [styles.active]: activeSection === item.id,
              })}
              key={item.id}
            >
              <InternalLink href={`/#${item.id}`}>{item.label}</InternalLink>
            </div>
          ))}
        </nav>
      </Container>
    </header>
  );
};

export { Header };
