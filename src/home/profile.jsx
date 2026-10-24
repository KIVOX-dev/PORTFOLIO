'use client';

const profileImgLarge = '/assets/profile-large.jpg';
const profileImgPlaceholder = '/assets/profile-placeholder.jpg';
const profileImg = '/assets/profile.jpg';
import { Button } from '@/components/button';
import { DecoderText } from '@/components/decoder-text';
import { Divider } from '@/components/divider';
import { Heading } from '@/components/heading';
import { Image } from '@/components/image';
import { Section } from '@/components/section';
import { Text } from '@/components/text';
import { Transition } from '@/components/transition';
import { Fragment, useState } from 'react';
import { media } from '@/utils/style';
const katakana = '/assets/katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I'm an M.Sc. Software Systems student and a Google Certified UI/UX Designer with a passion for building intuitive, user-centered digital experiences. I enjoy transforming ideas into clean, functional, and visually engaging web applications that solve real-world problems.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      My interests span UI/UX design, frontend development, AI-powered applications, and open-source collaboration. I work with React, Figma, Git, and modern web technologies while continuously exploring new tools and design practices to improve both user experience and software quality.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I believe great products are created through curiosity, continuous learning, and collaboration. I'm always excited to contribute to meaningful products, connect with developers and designers, and create technology that makes a positive impact.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Contact Me
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Kaviarasan M - M.Sc. Software Systems Student and Google Certified UI/UX Designer"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
