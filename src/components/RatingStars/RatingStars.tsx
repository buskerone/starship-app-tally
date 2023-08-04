import { FC } from 'react';
import { HStack, Image } from '@chakra-ui/react';
import { FullStarIcon, HalfStarIcon } from '@/assets';

interface RatingStarsProps {
  rating: number;
}

/**
 * Rating stars component for showing the ranking
 *
 * @component
 *
 * @author Carlos Knopel
 */
const RatingStars: FC<RatingStarsProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 === 0.5 ? 1 : 0;

  const renderStars = (src: string, count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <Image key={i} src={src} alt="star" boxSize={4} />
    ));
  };

  return (
    <HStack gap="8px" data-testid="rating-stars">
      {renderStars(FullStarIcon, fullStars)}
      {renderStars(HalfStarIcon, halfStars)}
    </HStack>
  );
};

export default RatingStars;
