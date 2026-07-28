import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { useRouteScroll } from '@/hooks/useRouteScroll';
import { AppRoutes } from '@/routes/AppRoutes';
import { AppShell } from './App.style';

const App = () => {
  useRouteScroll();

  return (
    <AppShell>
      <Header />
      <AppRoutes />
      <Footer />
    </AppShell>
  );
};

export default App;
