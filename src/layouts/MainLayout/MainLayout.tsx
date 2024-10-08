import { FC } from 'react';
import { Box, Container } from '@chakra-ui/react';
import { NavBar } from '@/components';
import { useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children: React.ReactNode;
}

/**
 * Mainlayout in order to wrap all the pages
 *
 * @component
 *
 * @author Carlos Knopel
 */
const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <Container maxW="8xl" minH="100vh">
      <NavBar isFavoritesLinkVisible={isHome} />
      <Box py={{ base: 28, lg: 20 }} px={{ base: 0, lg: 16 }}>
        {children}
      </Box>
    </Container>
  );
};

export default MainLayout;
