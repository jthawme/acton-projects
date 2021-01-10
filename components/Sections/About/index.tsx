import React, { useCallback, useEffect, useRef } from "react";
import { Container } from "../../Container";
import { TextEl } from "../../Common/Text";
import { ImageEl } from "../../Common/Image";
import { TitleEl } from "../../Common/Title";

import styles from "./About.module.scss";
import { useSiteContext } from "../../SiteContext";

const AboutSection = () => {
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
    <section id="about" ref={onRef} className={styles.section}>
      <div className={styles.introWrapper}>
        <Container className={styles.intro}>
          <TextEl className={styles.introText}>
            We are a small business with a vast amount of experience; that means
            that you get a personal service from a more knowledgeable team.
          </TextEl>
        </Container>
      </div>
      <div className={styles.imageWrapper}>
        <Container className={styles.image}>
          <ImageEl
            className={styles.imageEl}
            src="/placeholder.jpg"
            alt=""
            label="Image label"
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
            src="/team-gary@2x.jpg"
            alt=""
            label="Image label"
            ratio={0.6672597865}
            color="var(--color-light-red-orange)"
          />
          <div className={styles.teamSupporting}>
            <TitleEl>GARRY ACTON — DIRECTOR</TitleEl>
            <TextEl size="medium">
              I have worked in property sales for over 20 years, with my first
              career steps made in the world of new developments. But it was
              while working for two of the world’s leading real estate brands,
              Knight Frank and Savills, that I gained extensive knowledge of the
              high-end property market in Mayfair, Marylebone, St James’s and
              Belgravia. I became a director of Savills’ Mayfair office in 2010.
            </TextEl>
            <TextEl size="medium">
              I have established myself as a trusted advisor to clients,
              developers and buyers, who value my perseverance, honesty and calm
              approach.
            </TextEl>
          </div>
        </Container>
      </div>
    </section>
  );
};

export { AboutSection };
