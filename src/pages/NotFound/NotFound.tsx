import { Button } from '@/components/Button/Button';
import { Page } from './NotFound.style';

const NotFound = () => (
  <Page>
    <span>Erro 404</span>
    <h1>Página não encontrada.</h1>
    <p>O endereço informado não existe ou foi movido.</p>
    <Button to="/">Voltar ao início</Button>
  </Page>
);

export default NotFound;
