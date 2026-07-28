import { CertificateCard } from '@/components/CertificateCard/CertificateCard';
import { MotionSection } from '@/components/MotionSection/MotionSection';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { certificates } from '@/data/portfolio.data';
import { Grid } from './CertificatesSection.style';

export const CertificatesSection = () => (
  <MotionSection id="certificados">
    <SectionTitle label="Formação complementar" title="Certificados" />
    <Grid>
      {certificates.map((certificate) => (
        <CertificateCard key={certificate.id} certificate={certificate} />
      ))}
    </Grid>
  </MotionSection>
);
