import { FC } from 'react';
import { Card, Image, Text, HStack, VStack, Box } from '@chakra-ui/react';
import { RatingStars } from '@/components';
import { EmptyHeartIcon, FullHeartIcon, StarShipImage } from '@/assets';

import { Starship } from '@/types';

interface StarShipCardProps {
  data: Starship;
  isFavorite: boolean;
  favoriteButtonOnClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const StarShipCard: FC<StarShipCardProps> = ({
  data,
  isFavorite,
  favoriteButtonOnClick,
}) => {
  const { name, manufacturer, hyperdrive_rating, passengers } = data;
  return (
    <Card maxW={620} minW={355} bg="#232524" p={4} position="relative">
      <HStack justifyContent="space-between" alignItems="flex-start">
        <VStack alignItems="flex-start" w="60%">
          <Text fontWeight="bold" color="white" fontSize={24} noOfLines={1}>
            {name}
          </Text>
          <Text color="white" fontSize={18} noOfLines={2}>
            {manufacturer}
          </Text>
          <RatingStars rating={Number(hyperdrive_rating)} />
          <Text color="white" fontSize={18}>
            Passengers: {passengers}
          </Text>
        </VStack>
        <Box h={150} minW={100} position="relative">
          <Box
            aria-label="Click to add as a favorite!"
            as="button"
            display="flex"
            justifyContent="center"
            alignItems="center"
            w="44px"
            h="44px"
            bg="black.200"
            borderRadius="full"
            position="absolute"
            top="6px"
            right="6px"
            onClick={favoriteButtonOnClick}
          >
            {isFavorite ? (
              <Image src={FullHeartIcon} w="30px" h="30px" alt="favorite" />
            ) : (
              <Image src={EmptyHeartIcon} w="30px" h="30px" alt="favorite" />
            )}
          </Box>
          <Image
            src={StarShipImage}
            alt={name}
            objectFit="cover"
            borderRadius="lg"
            width="100%"
            height="100%"
          />
        </Box>
      </HStack>
    </Card>
  );
};

export default StarShipCard;
