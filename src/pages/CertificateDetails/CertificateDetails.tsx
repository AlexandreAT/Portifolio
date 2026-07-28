import { FiArrowLeft, FiArrowUpRight, FiFileText } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/Button/Button';
import { certificates } from '@/data/portfolio.data';
import {
  Actions,
  BackLink,
  CertificateFrame,
  Content,
  Hero,
  Meta,
  Page,
  Quote,
} from './CertificateDetails.style';

const CertificateDetails = () => {
  const { slug } = useParams();
  const certificate = certificates.find((item) => item.slug === slug);

  if (!certificate) {
    return (
      <Page>
        <Hero>
          <div>
            <span>Certificado não encontrado</span>
            <h1>Este certificado não está cadastrado.</h1>
            <Button to="/#certificados" variant="secondary">Voltar aos certificados</Button>
          </div>
        </Hero>
      </Page>
    );
  }

  return (
    <Page>
      <BackLink to="/#certificados">
        <FiArrowLeft aria-hidden="true" /> Voltar aos certificados
      </BackLink>
      <Hero>
        <Content>
          <span>Certificado</span>
          <h1>{certificate.title}</h1>
          <Meta>
            <div><small>Professor</small><strong>{certificate.instructor}</strong></div>
            <div><small>Conclusão</small><strong>{certificate.date}</strong></div>
            <div><small>Duração</small><strong>{certificate.duration}</strong></div>
          </Meta>
          <Quote>“{certificate.quote}”</Quote>
          <Actions>
            <Button href={certificate.courseUrl} external>
              Ver curso <FiArrowUpRight aria-hidden="true" />
            </Button>
            <Button href={certificate.pdfUrl} external variant="secondary">
              <FiFileText aria-hidden="true" /> Abrir PDF
            </Button>
          </Actions>
        </Content>
      </Hero>
      <CertificateFrame>
        <iframe src={`${certificate.pdfUrl}#toolbar=1&navpanes=0&view=FitH`} title={`Certificado ${certificate.title}`} />
      </CertificateFrame>
    </Page>
  );
};

export default CertificateDetails;
