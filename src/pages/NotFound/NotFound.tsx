import { FC } from 'react';
import { Center } from '@chakra-ui/react';
import { EmptyState } from '@/components';

/**
 * Not Found page.
 *
 * @component
 *
 * @author Carlos Knopel
 */
const NotFound: FC = () => {
  return (
    <Center w="100%" h="100%">
      <EmptyState text="Ups! we have a 404 here..." />
    </Center>
  );
};

export default NotFound;
