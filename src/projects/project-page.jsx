'use client';

import { Footer } from '@/components/footer';
import { Image } from '@/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '@/layouts/project';
import { Fragment } from 'react';
import { media } from '@/utils/style';
import { getTexture } from '@/content/work';
import styles from './project-page.module.css';

export function ProjectPage({ project }) {
  const { title, description, roles, url, host, shot, mobileShots, alt, sections } =
    project;
  const hero = getTexture(shot);
  const [width, height] = shot.aspect;

  return (
    <Fragment>
      <ProjectContainer>
        <ProjectBackground
          src={`/assets/work/${shot.name}-bg.jpg`}
          width={width}
          height={height}
          placeholder={`/assets/work/${shot.name}-bg-placeholder.jpg`}
          opacity={0.7}
        />
        <ProjectHeader
          title={title}
          description={description}
          url={url}
          linkLabel={`Visit ${host}`}
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={hero.srcSet}
              width={width}
              height={height}
              placeholder={hero.placeholder}
              alt={alt}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        {sections.map(({ heading, text }, index) => (
          <ProjectSection key={heading} light={index % 2 === 0}>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>{heading}</ProjectSectionHeading>
                {text.map(paragraph => (
                  <ProjectSectionText key={paragraph}>{paragraph}</ProjectSectionText>
                ))}
              </ProjectTextRow>
              {index === 0 && !!mobileShots && (
                <div className={styles.phones}>
                  {mobileShots.map((mobile, i) => {
                    const texture = getTexture(mobile);

                    return (
                      <Image
                        key={mobile.name}
                        className={styles.phone}
                        srcSet={texture.srcSet}
                        width={375}
                        height={812}
                        placeholder={texture.placeholder}
                        alt={`${title} on a phone, screen ${i + 1}`}
                        sizes={`(max-width: ${media.mobile}px) 45vw, 320px`}
                      />
                    );
                  })}
                </div>
              )}
            </ProjectSectionContent>
          </ProjectSection>
        ))}
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}
