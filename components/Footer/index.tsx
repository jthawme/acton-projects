import React, { useEffect, useRef } from "react";
import { onWindowResize } from "../../utils/events";
import { InternalLink } from "../Common/InternalLink";
import { TextEl } from "../Common/Text";
import { Container } from "../Container";
import { Logo } from "../Logo";

import styles from "./Footer.module.scss";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const setHeight = () => {
      document.documentElement.style.setProperty(
        "--footer-height",
        footerRef.current ? `${footerRef.current.clientHeight}px` : undefined
      );
    };
    setHeight();
    return onWindowResize(setHeight);
  }, []);

  return (
    <footer ref={footerRef} className={styles.footer}>
      <div className={styles.brand}>
        <Container controlled={false}>
          <Logo className={styles.brandLogo} side />
        </Container>
      </div>
      <div className={styles.linksWrapper}>
        <Container className={styles.links} controlled={false}>
          <TextEl size="normal" className={styles.linksContent}>
            <InternalLink href="#about">ABOUT</InternalLink>
            <br />
            <InternalLink href="#service">SERVICE</InternalLink>
            <br />
            <InternalLink href="#contact">CONTACT</InternalLink>
          </TextEl>

          <p className={styles.linksCopyright}>
            Copyright © {new Date().getFullYear()} Acton Projects Ltd.
          </p>

          <p className={styles.linksJump}>
            <InternalLink href="/#landing">Back to top</InternalLink>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export { Footer };
