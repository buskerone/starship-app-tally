import { FC } from 'react';
import { Box, Container } from '@chakra-ui/react';
import { NavBar } from '@/components';
import { useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <Container maxW="8xl" minH="100vh">
      <NavBar isFavoritesLinkVisible={isHome} />
      <Box p={{ base: 0, lg: 16 }}>{children}</Box>
    </Container>
  );
};

export default MainLayout;
