import { useEffect, useState } from 'react';
import { FiCode, FiFileText, FiMenu, FiX } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';
import { profile, socialLinks } from '@/data/portfolio.data';
import { getIcon } from '@/utils/icons';
import {
  Brand,
  DesktopActions,
  HeaderBar,
  HeaderContent,
  MenuButton,
  MobilePanel,
  Nav,
  NavItem,
  ResumeLink,
  SocialAnchor,
} from './Header.style';

const navigation = [
  { label: 'Início', to: '/' },
  { label: 'Projetos', to: '/projetos' },
  { label: 'Sobre mim', to: '/sobre-mim' },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const visibleSocials = socialLinks.filter((social) => social.url);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  const goToContact = () => {
    setMenuOpen(false);
    if (location.pathname === '/') {
      document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contato');
    }
  };

  return (
    <HeaderBar>
      <HeaderContent>
        <Brand to="/" aria-label="Ir para a página inicial">
          <FiCode aria-hidden="true" />
          <strong>{profile.name}</strong>
        </Brand>

        <Nav aria-label="Navegação principal">
          {navigation.map((item) => (
            <NavItem key={item.to} to={item.to} end={item.to === '/'}>
              {item.label}
            </NavItem>
          ))}
          <button type="button" onClick={goToContact}>Contato</button>
        </Nav>

        <DesktopActions>
          {visibleSocials.map((social) => {
            const Icon = getIcon(social.icon);
            return (
              <SocialAnchor key={social.id} href={social.url} target="_blank" rel="noreferrer">
                <Icon aria-hidden="true" /> {social.label}
              </SocialAnchor>
            );
          })}
          <ResumeLink href={profile.resumeUrl} target="_blank" rel="noreferrer">
            <FiFileText aria-hidden="true" /> Currículo
          </ResumeLink>
        </DesktopActions>

        <MenuButton
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </MenuButton>

        <MobilePanel id="mobile-menu" $open={menuOpen}>
          {navigation.map((item) => (
            <NavItem key={item.to} to={item.to} end={item.to === '/'}>
              {item.label}
            </NavItem>
          ))}
          <button type="button" onClick={goToContact}>Contato</button>
          {visibleSocials.map((social) => {
            const Icon = getIcon(social.icon);
            return (
              <SocialAnchor key={social.id} href={social.url} target="_blank" rel="noreferrer">
                <Icon aria-hidden="true" /> {social.label}
              </SocialAnchor>
            );
          })}
        </MobilePanel>
      </HeaderContent>
    </HeaderBar>
  );
};
