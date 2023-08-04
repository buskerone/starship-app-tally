import { FC } from 'react';
import { Box, Container } from '@chakra-ui/react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Container maxW="8xl" minH="100vh">
      {/* TODO: put nav bar here */}
      <Box p={{ base: 0, lg: 16 }}>{children}</Box>
    </Container>
  );
};

export default MainLayout;
