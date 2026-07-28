import { FiArrowUp, FiCode } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { profile } from '@/data/portfolio.data';
import { BackToTop, Brand, Copyright, FooterBar, FooterContent, FooterNav } from './Footer.style';

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goToContact = () => {
    if (location.pathname === '/') {
      document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contato');
    }
  };

  return (
    <FooterBar>
      <FooterContent>
        <Brand>
          <FiCode aria-hidden="true" />
          <div>
            <strong>{profile.name}</strong>
            <span>{profile.role}</span>
          </div>
        </Brand>
        <Copyright>© {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.</Copyright>
        <FooterNav aria-label="Navegação do rodapé">
          <Link to="/">Início</Link>
          <Link to="/projetos">Projetos</Link>
          <Link to="/sobre-mim">Sobre mim</Link>
          <button type="button" onClick={goToContact}>Contato</button>
        </FooterNav>
        <BackToTop type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Voltar ao topo">
          <FiArrowUp aria-hidden="true" />
        </BackToTop>
      </FooterContent>
    </FooterBar>
  );
};
