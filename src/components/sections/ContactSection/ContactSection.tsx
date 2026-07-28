import { FiArrowUpRight } from 'react-icons/fi';
import { MotionSection } from '@/components/MotionSection/MotionSection';
import { contactOptions } from '@/data/portfolio.data';
import { getIcon } from '@/utils/icons';
import { ContactCard, ContactGrid, Copy, DisabledCard, Layout } from './ContactSection.style';

export const ContactSection = () => (
  <MotionSection id="contato">
    <Layout>
      <Copy>
        <span>Vamos conversar?</span>
        <h2>Tem uma oportunidade ou projeto em mente? Vamos conversar.</h2>
        <p>Estou aberto a novas oportunidades profissionais, projetos e boas conversas sobre desenvolvimento de software.</p>
      </Copy>
      <ContactGrid>
        {contactOptions.map((option) => {
          const Icon = getIcon(option.icon);
          const content = (
            <>
              <Icon aria-hidden="true" />
              <div><strong>{option.label}</strong><span>{option.value}</span></div>
              {option.url && <FiArrowUpRight aria-hidden="true" />}
            </>
          );

          return option.url ? (
            <ContactCard key={option.id} href={option.url} target={option.url.startsWith('http') ? '_blank' : undefined} rel={option.url.startsWith('http') ? 'noreferrer' : undefined}>
              {content}
            </ContactCard>
          ) : (
            <DisabledCard key={option.id} title="Complete este link em portfolio.data.ts">{content}</DisabledCard>
          );
        })}
      </ContactGrid>
    </Layout>
  </MotionSection>
);
