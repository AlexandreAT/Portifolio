import { Header, Label, Text } from './SectionTitle.style';

interface SectionTitleProps {
  label: string;
  title?: string;
  description?: string;
}

export const SectionTitle = ({ label, title, description }: SectionTitleProps) => (
  <Header>
    <Label>{label}</Label>
    {title && <Text>{title}</Text>}
    {description && <p>{description}</p>}
  </Header>
);
