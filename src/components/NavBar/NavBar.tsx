import { FC } from 'react';
import { Box, HStack, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HomeLogo } from '@/assets';

interface NavBarProps {
  isFavoritesLinkVisible: boolean;
}

/**
 * NavBar component that shows a button for navigating to favorites page if needed + brand logo
 *
 * @component
 *
 * @author Carlos Knopel
 */
const NavBar: FC<NavBarProps> = ({ isFavoritesLinkVisible }) => {
  return (
    <HStack px={{ base: 0, lg: 16 }} maxW="8xl" position="relative">
      <Box position="absolute" top="10px" left={{ base: -7, lg: 10 }}>
        <Link to="/">
          <Image src={HomeLogo} w={105} h={79} alt="StarShip" />
        </Link>
      </Box>
      {isFavoritesLinkVisible && (
        <HStack
          w="100%"
          mt={{ base: 8, lg: '37px' }}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Link aria-label="Go to favorites" to="/favorites">
            <Box bg="black.200" borderRadius={20} py={1.5} px={5}>
              <Text fontSize={24} color="red.100" textAlign="center">
                View Favorites
              </Text>
            </Box>
          </Link>
        </HStack>
      )}
    </HStack>
  );
};

export default NavBar;
