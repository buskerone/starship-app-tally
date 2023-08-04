import { FC } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Center, VStack, Text } from '@chakra-ui/react';
import { EmptyAnimation } from '@/assets';

interface EmptyStateProps {
  text: string;
}

const EmptyState: FC<EmptyStateProps> = ({ text }) => {
  return (
    <Center>
      <VStack>
        <Player
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
