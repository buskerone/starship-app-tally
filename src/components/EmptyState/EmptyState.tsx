import { FC } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Center, VStack, Text } from '@chakra-ui/react';
import { EmptyAnimation } from '@/assets';

interface EmptyStateProps {
  text: string;
}

/**
 * Empty state component for showing empty state screens or even error screens
 *
 * @component
 *
 * @author Carlos Knopel
 */
const EmptyState: FC<EmptyStateProps> = ({ text }) => {
  return (
    <Center>
      <VStack>
        <Player
          data-testid="lottie-player"
          autoplay
          loop
          src={EmptyAnimation}
          style={{ height: '300px', width: '300px' }}
        />
        <Text>{text}</Text>
      </VStack>
    </Center>
  );
};

export default EmptyState;
