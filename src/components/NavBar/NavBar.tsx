import { FC } from 'react';
import { Box, HStack, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HomeLogo } from '@/assets';

interface NavBarProps {
  isFavoritesLinkVisible: boolean;
}

const NavBar: FC<NavBarProps> = ({ isFavoritesLinkVisible }) => {
  return (
    <HStack
      px={{ base: 0, lg: 16 }}
      maxW="8xl"
      justifyContent="space-between"
      alignItems="center"
    >
      <Link to="/">
        <Image src={HomeLogo} w={105} h={79} alt="StarShip" />
      </Link>
      {isFavoritesLinkVisible && (
        <Link to="/favorites">
          <Box bg="black.200" borderRadius={20} py={1.5} px={5}>
            <Text fontSize={24} color="red.100" textAlign="center">
              View Favorites
            </Text>
          </Box>
        </Link>
      )}
    </HStack>
  );
};

export default NavBar;
