import { FC } from 'react';
import { Card, Image, Text, HStack, VStack } from '@chakra-ui/react';
import { RatingStars } from '@/components';
import { StarShipImage } from '@/assets';

import { Starship } from '@/types';

interface StarShipCardProps {
  data: Starship;
}

const StarShipCard: FC<StarShipCardProps> = ({ data }) => {
  const { name, manufacturer, hyperdrive_rating, passengers } = data;
  return (
    <Card maxW={620} minW={355} bg="#232524" p={4}>
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
        <Image
          src={StarShipImage}
          alt={name}
          borderRadius="lg"
          h={150}
          minW={100}
        />
      </HStack>
    </Card>
  );
};

export default StarShipCard;
