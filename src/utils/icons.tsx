import type { IconType } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  FiBox,
  FiBriefcase,
  FiCode,
  FiDatabase,
  FiFileText,
  FiGrid,
  FiLayers,
  FiMail,
  FiMonitor,
  FiSmartphone,
  FiTool,
} from 'react-icons/fi';
import {
  SiSharp,
  SiDocker,
  SiDotnet,
  SiGit,
  SiMongodb,
  SiMysql,
  SiReact,
  SiTypescript,
} from 'react-icons/si';
import type { IconName } from '@/types/portfolio.types';

const icons: Record<IconName, IconType> = {
  code: FiCode,
  csharp: SiSharp,
  dotnet: SiDotnet,
  react: SiReact,
  typescript: SiTypescript,
  mysql: SiMysql,
  sqlserver: FiDatabase,
  mongodb: SiMongodb,
  docker: SiDocker,
  git: SiGit,
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FiMail,
  document: FiFileText,
  devices: FiSmartphone,
  product: FiBriefcase,
  design: FiGrid,
  education: FiBox,
  layers: FiLayers,
  tools: FiTool,
};

export const getIcon = (name: IconName): IconType => icons[name] ?? FiMonitor;
