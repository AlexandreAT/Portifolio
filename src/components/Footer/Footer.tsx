import { FiArrowUp, FiCode } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { profile } from '@/data/portfolio.data';
import { BackToTop, Brand, Copyright, FooterBar, FooterContent, FooterNav } from './Footer.style';

export const Footer = () => {
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
        <Copyright>© {new Date().getFullYear()} {profile.name}</Copyright>
        <FooterNav aria-label="Navegação do rodapé">
          <Link to="/">Início</Link>
          <Link to="/projetos">Projetos</Link>
          <Link to="/sobre-mim">Sobre mim</Link>
        </FooterNav>
        <BackToTop type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Voltar ao topo">
          <FiArrowUp aria-hidden="true" />
        </BackToTop>
      </FooterContent>
    </FooterBar>
  );
};
