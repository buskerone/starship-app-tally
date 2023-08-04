import { FC } from 'react';
import { HStack, Text, Spinner } from '@chakra-ui/react';

interface PageHeaderProps {
  title: string;
  isLoading?: boolean;
}

/**
 * Page header component in order to show the title and a loading spinner when needed
 *
 * @component
 *
 * @author Carlos Knopel
 */
const PageHeader: FC<PageHeaderProps> = ({ title, isLoading = false }) => {
  return (
    <HStack justifyContent="flex-start" alignContent="center">
      <Text fontSize="48px" fontWeight="bold">
        {title}
      </Text>
      {isLoading && <Spinner />}
    </HStack>
  );
};

export default PageHeader;
