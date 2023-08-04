import { FC, useContext } from 'react';
import { Box, Grid } from '@chakra-ui/react';
import { PageHeader, EmptyState, StarShipCard } from '@/components';
import { FavoritesContext } from '@/context/Favorites';
import { useIsShipFavorite, useToggleFavoriteShip } from '@/hooks';
import { PageTitles } from '@/constants';

import { Starship } from '@/types';

const Favorites: FC = () => {
  const { favorites } = useContext(FavoritesContext);

  const handleToggleShipFavorite = useToggleFavoriteShip();
  const isShipFavorite = useIsShipFavorite();

  return (
    <Box h="100%" w="100%">
      <PageHeader title={PageTitles.FAVORITES} />
      {favorites.length === 0 ? (
        <EmptyState text="Sorry, you don't have any favorites here" />
      ) : (
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(2, 1fr)',
          }}
          gap={6}
          mt={6}
        >
          {favorites.map((ship: Starship) => (
            <StarShipCard
              key={`${ship.name}-${ship.manufacturer}`}
              data={ship}
              isFavorite={isShipFavorite(ship)}
              favoriteButtonOnClick={() => handleToggleShipFavorite(ship)}
            />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Favorites;
