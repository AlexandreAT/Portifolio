import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import type { Certificate } from '@/types/portfolio.types';
import { Card, CardBody, PdfPreview } from './CertificateCard.style';

interface CertificateCardProps {
  certificate: Certificate;
}

export const CertificateCard = ({ certificate }: CertificateCardProps) => (
  <Card>
    <PdfPreview>
      <iframe
        src={`${certificate.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
        title={`Prévia do certificado ${certificate.title}`}
        loading="lazy"
        tabIndex={-1}
      />
    </PdfPreview>
    <CardBody>
      <span>Certificado</span>
      <h3>{certificate.title}</h3>
      <small>{certificate.instructor}</small>
      <Link to={`/certificados/${certificate.slug}`}>
        Ver certificado <FiArrowUpRight aria-hidden="true" />
      </Link>
    </CardBody>
  </Card>
);
