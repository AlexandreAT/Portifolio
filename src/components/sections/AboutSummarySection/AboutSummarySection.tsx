import { Button } from '@/components/Button/Button';
import { MotionSection } from '@/components/MotionSection/MotionSection';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { homeSummaryCards, profile } from '@/data/portfolio.data';
import { getIcon } from '@/utils/icons';
import { Content, Copy, InfoCard, InfoGrid } from './AboutSummarySection.style';

export const AboutSummarySection = () => (
  <MotionSection id="sobre-mim-resumo" className="surface-section">
    <Content>
      <Copy>
        <SectionTitle label="Sobre mim" title="Código com visão de produto" />
        {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <Button to="/sobre-mim" variant="secondary" showArrow>Ler mais sobre mim</Button>
      </Copy>
      <InfoGrid>
        {homeSummaryCards.map((card) => {
          const Icon = getIcon(card.icon);
          return (
            <InfoCard key={card.id}>
              <div><Icon aria-hidden="true" /><h3>{card.title}</h3></div>
              <ul>{card.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </InfoCard>
          );
        })}
      </InfoGrid>
    </Content>
  </MotionSection>
);
