import { ChangeEventHandler, FC } from 'react';
import {
  Card,
  Image,
  Text,
  HStack,
  VStack,
  Box,
  Textarea,
} from '@chakra-ui/react';
import { RatingStars } from '@/components';
import { EmptyHeartIcon, FullHeartIcon, StarShipImage } from '@/assets';

import { Starship } from '@/types';

interface StarShipCardProps {
  data: Starship;
  isFavorite: boolean;
  favoriteButtonOnClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  isNotesBoxVisible?: boolean;
  notesText?: string;
  onNotesChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined;
}

/**
 * Starship main card component
 *
 * @component
 *
 * @author Carlos Knopel
 */
const StarShipCard: FC<StarShipCardProps> = ({
  data,
  isFavorite,
  favoriteButtonOnClick,
  isNotesBoxVisible = false,
  notesText,
  onNotesChange,
}) => {
  const { name, manufacturer, hyperdrive_rating, passengers } = data;
  return (
    <Card
      maxW={620}
      minW={355}
      bg="black.100"
      p={4}
      position="relative"
      data-testid="starship-card"
    >
      <HStack justifyContent="space-between" alignItems="flex-start">
        <VStack alignItems="flex-start" w="60%">
          <Text
            data-testid="starship-name"
            fontWeight="bold"
            color="white"
            fontSize={24}
            noOfLines={1}
          >
            {name}
          </Text>
          <Text
            data-testid="starship-manufacturer"
            color="white"
            fontSize={18}
            noOfLines={2}
          >
            {manufacturer}
          </Text>
          <RatingStars rating={Number(hyperdrive_rating)} />
          <Text data-testid="starship-passengers" color="white" fontSize={18}>
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
            data-testid="starship-favorite"
          >
            <Image
              src={isFavorite ? FullHeartIcon : EmptyHeartIcon}
              w="30px"
              h="30px"
              alt="favorite"
            />
          </Box>
          <Image
            data-testid="starship-image"
            src={StarShipImage}
            alt={name}
            objectFit="cover"
            borderRadius="lg"
            width="100%"
            height="100%"
          />
        </Box>
      </HStack>
      {isNotesBoxVisible && (
        <Textarea
          data-testid="starship-notes"
          mt="30px"
          borderColor="gray.100"
          placeholder="Add text"
          color="white"
          value={notesText}
          onChange={onNotesChange}
        />
      )}
    </Card>
  );
};

export default StarShipCard;
