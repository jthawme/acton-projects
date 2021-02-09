import React, { useCallback, useEffect, useRef } from "react";
import classNames from "classnames";
import { Container } from "../../Container";
import { TextEl } from "../../Common/Text";
import { ImageEl } from "../../Common/Image";
import { TitleEl } from "../../Common/Title";

import styles from "./About.module.scss";
import { useSiteContext } from "../../SiteContext";

const AboutSection = () => {
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
      id="about"
      ref={onRef}
      className={classNames(styles.section, {
        [styles.inactive]: activeSection !== "about",
      })}
    >
      <div className={styles.introWrapper}>
        <Container className={styles.intro}>
          <TextEl className={styles.introText}>
            At Acton Projects, we know construction. We&nbsp;are a new
            construction company offering many years of experience. We bring a
            personal touch, in a professional manner, to your commercial,
            residential or public sector project.
          </TextEl>
        </Container>
      </div>
      <div className={styles.imageWrapper}>
        <Container className={styles.image}>
          <ImageEl
            className={styles.imageEl}
            src="/building.jpg"
            alt=""
            // label="Image label"
            ratio={2592 / 3872}
            color="var(--color-earth-4)"
          />
        </Container>
      </div>
      <div className={styles.aboutTextWrapper}>
        <Container className={styles.aboutText}>
          <TextEl className={styles.aboutTextLead}>
            We founded our business with the mission to provide our clients with
            a more complete professional service; bringing expertise through
            consultation, construction and completion.
          </TextEl>
          <TextEl size="normal" className={styles.aboutTextSupporting}>
            We are passionate about construction and feel that the same level of
            expertise and professionalism ought to be brought to both large and
            small building projects. Our service offers streamlined{" "}
            <em>consultation</em>— to ensure that every project sets off in the
            right direction; we have our own team of contractors and trades
            people — to enable us to control each <em>construction</em> to
            exacting standards; and we take care of project management to
            guarantee that every project is on time, on budget and pushed
            through to&nbsp;<em>completion</em>.
          </TextEl>
        </Container>
      </div>
      <div className={styles.teamWrapper}>
        <Container className={styles.team}>
          <TitleEl tagName="h2" className={styles.teamTitle} size="large">
            Who We are
          </TitleEl>
          <ImageEl
            className={styles.teamImage}
            src="/portrait.jpg"
            alt=""
            // label="Image label"
            ratio={847 / 1200}
            color="var(--color-light-red-orange)"
          />
          <div className={styles.teamSupporting}>
            <TitleEl>GARRY ACTON — DIRECTOR</TitleEl>
            <TextEl size="medium">
              I have worked in building and construction for almost 20 years,
              with&nbsp;10 years spent at Willmott Dixon, one of the largest
              privately owned construction companies in the UK.
            </TextEl>
            <TextEl size="medium">
              Working in the education sector, delivering complex live projects
              with strict deadlines and imperative budgets, has allowed me to
              garner the experience that we now translate into the private
              sector as well — exceptional in pre-planning, meticulous through
              construction and focussed on quality and value.
            </TextEl>
            <TextEl size="medium">
              Our principle is honesty is the best policy (with no hidden
              extras), working <i>with</i> people to build long lasting
              relationships.
            </TextEl>
          </div>
        </Container>
      </div>
    </section>
  );
};

export { AboutSection };
