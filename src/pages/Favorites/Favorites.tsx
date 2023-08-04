import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { PageHeader } from '@/components';
import { PageTitles } from '@/constants';

const Favorites: FC = () => {
  return (
    <Box h="100%" w="100%">
      <PageHeader title={PageTitles.FAVORITES} />
    </Box>
  );
};

export default Favorites;
