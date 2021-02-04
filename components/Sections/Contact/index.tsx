import React, { useCallback, useEffect, useRef } from "react";
import classNames from "classnames";
import { ImageEl } from "../../Common/Image";
import { TextEl } from "../../Common/Text";
import { TitleEl } from "../../Common/Title";
import { Container } from "../../Container";
import { useSiteContext } from "../../SiteContext";

import styles from "./Contact.module.scss";

const ContactSection = () => {
  const { observeElement, activeSection } = useSiteContext();
  const unobserve = useRef(() => {});

  const onRef = useCallback((ref) => {
    if (ref) {
      unobserve.current = observeElement(ref);
    }
  }, []);

  useEffect(() => {
    return unobserve.current;
  }, []);

  return (
    <section
      ref={onRef}
      id="contact"
      className={classNames(styles.section, {
        [styles.inactive]: activeSection !== "contact",
      })}
    >
      <div className={styles.introWrapper}>
        <Container className={styles.intro}>
          <TextEl className={styles.introText}>
            If would like to discuss your project with us, or find our more
            about how we might be able to help you with building or maintenance,
            we would be delighted to hear from you.
          </TextEl>
          <div className={styles.row}>
            <TitleEl size="small" className={styles.rowTitle}>
              General Enquiries
            </TitleEl>
            <TextEl size="normal" className={styles.rowContent}>
              <a href="mailto:garry@actonprojects.co.uk">
                garry@actonprojects.co.uk
              </a>
              <br />
              <a href="tel:+44 (0)7807 125092">+44 (0)7807 125092</a>
            </TextEl>
          </div>

          <div className={styles.row}>
            <TitleEl size="small" className={styles.rowTitle}>
              ADDRESS
            </TitleEl>
            <TextEl size="normal" className={styles.rowContent}>
              The Barnhouse
              <br />
              18A East End
              <br />
              Walkington <br />
              Beverley
              <br />
              HU17 8RY
            </TextEl>
          </div>

          <div className={styles.row}>
            <TitleEl size="small" className={styles.rowTitle}>
              Company Registration
            </TitleEl>
            <TextEl size="normal" className={styles.rowContent}>
              VAT No. 210 1909 57
              <br />
              REG. 8091780
            </TextEl>
          </div>
        </Container>
      </div>
    </section>
  );
};

export { ContactSection };
