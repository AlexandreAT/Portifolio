import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Loading } from './AppRoutes.style';

const Home = lazy(() => import('@/pages/Home/Home'));
const Projects = lazy(() => import('@/pages/Projects/Projects'));
const About = lazy(() => import('@/pages/About/About'));
const ProjectDetails = lazy(() => import('@/pages/ProjectDetails/ProjectDetails'));
const CertificateDetails = lazy(() => import('@/pages/CertificateDetails/CertificateDetails'));
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'));

export const AppRoutes = () => (
  <Suspense fallback={<Loading role="status">Carregando...</Loading>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projetos" element={<Projects />} />
      <Route path="/projetos/:slug" element={<ProjectDetails />} />
      <Route path="/certificados/:slug" element={<CertificateDetails />} />
      <Route path="/sobre-mim" element={<About />} />
      <Route path="/inicio" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);
