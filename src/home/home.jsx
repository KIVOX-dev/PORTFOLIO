'use client';

import { Footer } from '@/components/footer';
import { projects, getTexture } from '@/content/work';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import styles from './home.module.css';

const withSizes = shot => ({ ...getTexture(shot) });

const summaries = projects.map(project => ({
  id: project.slug,
  title: project.title,
  description: project.summary,
  buttonText: 'View project',
  buttonLink: `/projects/${project.slug}`,
  model: {
    type: project.device,
    alt: project.alt,
    textures:
      project.device === 'phone'
        ? project.mobileShots.map(withSizes)
        : [withSizes(project.shot)],
  },
}));

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();
  const projectRefs = [projectOne, projectTwo, projectThree];

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      {summaries.map((summary, index) => (
        <ProjectSummary
          key={summary.id}
          id={`project-${index + 1}`}
          alternate={index % 2 === 1}
          sectionRef={projectRefs[index]}
          visible={visibleSections.includes(projectRefs[index].current)}
          index={index + 1}
          title={summary.title}
          description={summary.description}
          buttonText={summary.buttonText}
          buttonLink={summary.buttonLink}
          model={summary.model}
        />
      ))}
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
