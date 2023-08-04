import { FC } from 'react';
import { HStack, Heading, Spinner } from '@chakra-ui/react';

interface PageHeaderProps {
  title: string;
  isLoading?: boolean;
}

const PageHeader: FC<PageHeaderProps> = ({ title, isLoading = false }) => {
  return (
    <HStack justifyContent="flex-start" alignContent="center">
      <Heading>{title}</Heading>
      {isLoading && <Spinner />}
    </HStack>
  );
};

export default PageHeader;
