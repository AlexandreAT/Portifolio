import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import { ContactSection } from '@/components/sections/ContactSection/ContactSection';
import { courses, education, experiences, profile, skillCategories } from '@/data/portfolio.data';
import { getIcon } from '@/utils/icons';
import {
  AboutCopy,
  CourseCard,
  EducationGrid,
  Intro,
  Page,
  Section,
  SkillCard,
  SkillsGrid,
  Timeline,
  TimelineItem,
} from './About.style';

const About = () => (
  <Page>
    <Intro>
      <span>Sobre mim</span>
      <h1>Desenvolvimento com repertório de produto e design.</h1>
      <AboutCopy>{profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</AboutCopy>
    </Intro>

    <Section>
      <header><span>Trajetória</span><h2>Experiência profissional</h2></header>
      <Timeline>
        {experiences.map((experience) => (
          <TimelineItem key={experience.id}>
            <FiBriefcase aria-hidden="true" />
            <div>
              <small>{experience.period}</small>
              <h3>{experience.role}</h3>
              <strong>{experience.company}</strong>
              <p>{experience.description}</p>
              <ul>{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
            </div>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>

    <Section>
      <header><span>Base acadêmica</span><h2>Formação e cursos</h2></header>
      <EducationGrid>
        {education.map((item) => (
          <CourseCard key={item.id}>
            <FiCalendar aria-hidden="true" />
            <div><h3>{item.course}</h3><p>{item.institution}</p><span>{item.period}</span></div>
          </CourseCard>
        ))}
        {courses.map((course) => (
          <CourseCard key={course.id}>
            <FiCalendar aria-hidden="true" />
            <div><h3>{course.name}</h3>{course.institution && <p>{course.institution}</p>}{course.status && <span>{course.status}</span>}</div>
          </CourseCard>
        ))}
      </EducationGrid>
    </Section>

    <Section>
      <header><span>Conhecimentos</span><h2>Tecnologias por categoria</h2></header>
      <SkillsGrid>
        {skillCategories.map((category) => {
          const Icon = getIcon(category.icon);
          return (
            <SkillCard key={category.id}>
              <Icon aria-hidden="true" /><h3>{category.title}</h3>
              <ul>{category.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </SkillCard>
          );
        })}
      </SkillsGrid>
    </Section>

    <ContactSection />
  </Page>
);

export default About;
