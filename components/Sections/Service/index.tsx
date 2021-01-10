import React, { useCallback, useEffect, useRef } from "react";
import { ImageEl } from "../../Common/Image";
import { TextEl } from "../../Common/Text";
import { TitleEl } from "../../Common/Title";
import { Container } from "../../Container";
import { useSiteContext } from "../../SiteContext";

import styles from "./Service.module.scss";

const ServiceSection = () => {
  const { observeElement } = useSiteContext();
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
    <section ref={onRef} id="service" className={styles.section}>
      <div className={styles.introWrapper}>
        <Container className={styles.intro}>
          <TextEl className={styles.introText}>
            Our services are tailored to our clients needs, whether you are a
            private individual or a larger organisation withing the construction
            industry.
          </TextEl>
        </Container>
      </div>
      <div className={styles.splitWrapper}>
        <Container className={styles.split}>
          <div className={styles.splitOne}>
            <TitleEl className={styles.splitTitle}>What we do</TitleEl>
            <TextEl className={styles.splitContent}>
              We offer the full range of ‘component’ services for construction.
              From strategy and design development, through planning, project
              management and building delivery for the domestic, commercial and
              public sector. We also work on new build developments,
              refurbishment projects and fit outs, as well as planned and
              preventative maintenance.
            </TextEl>
          </div>
          <div className={styles.splitTwo}>
            <TitleEl className={styles.splitTitle}>Who we work for</TitleEl>
            <TextEl className={styles.splitContent} size="medium">
              Private individuals
              <br />
              Developers
              <br />
              Property managers and agents
              <br />
              Architects
              <br />
              Insurance companies
              <br />
              LEA and Academies
              <br />
              Local Authoraties
              <br />
            </TextEl>
          </div>
        </Container>
      </div>
    </section>
  );
};

export { ServiceSection };
