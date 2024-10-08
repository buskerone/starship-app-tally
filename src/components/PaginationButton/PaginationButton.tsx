import { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';

interface PaginationButtonProps {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  disabled: boolean;
}

/**
 * Custom button used for navigating through pages
 *
 * @component
 *
 * @author Carlos Knopel
 */
const PaginationButton: FC<PaginationButtonProps> = ({
  title,
  onClick,
  disabled,
}) => {
  return (
    <Box
      data-testid="pagination-button"
      aria-label={`${title} button`}
      as="button"
      lineHeight="1.2"
      px="12px"
      py="8px"
      borderRadius="20px"
      fontSize="12px"
      bg="black.200"
      _disabled={{
        backgroundColor: 'transparent',
        color: 'gray.100',
      }}
      onClick={onClick}
      disabled={disabled}
    >
      <Text>{title}</Text>
    </Box>
  );
};

export default PaginationButton;
