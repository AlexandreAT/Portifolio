import { FiAward, FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { ContactSection } from '@/components/sections/ContactSection/ContactSection';
import { certificates, education, experiences, profile, skillCategories } from '@/data/portfolio.data';
import { getIcon } from '@/utils/icons';
import {
  AboutCopy,
  CourseCard,
  EducationGrid,
  Intro,
  Page,
  PersonalMeta,
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
      <h1>Minha trajetória profissional.</h1>
      <AboutCopy>
        {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <PersonalMeta>
          <span><FiMapPin aria-hidden="true" /> {profile.location}</span>
          {profile.languages.map((language) => <span key={language}>{language}</span>)}
        </PersonalMeta>
      </AboutCopy>
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
      <header><span>Base acadêmica</span><h2>Formação e certificações</h2></header>
      <EducationGrid>
        {education.map((item) => (
          <CourseCard key={item.id}>
            <FiCalendar aria-hidden="true" />
            <div><h3>{item.course}</h3><p>{item.institution}</p><span>{item.period}</span></div>
          </CourseCard>
        ))}
        {certificates.map((certificate) => (
          <CourseCard key={certificate.id}>
            <FiAward aria-hidden="true" />
            <div>
              <h3>{certificate.title}</h3>
              <p>{certificate.instructor}</p>
              <span>{certificate.date}</span>
              <Link to={`/certificados/${certificate.slug}`}>Ver certificado</Link>
            </div>
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
