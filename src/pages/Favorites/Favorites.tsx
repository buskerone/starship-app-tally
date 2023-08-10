import { FC, useContext } from 'react';
import { Box, Grid } from '@chakra-ui/react';
import { PageHeader, EmptyState, StarShipCard } from '@/components';
import { FavoritesContext } from '@/context/FavoritesContext';
import { NotesContext } from '@/context/NotesContext';
import { useIsShipFavorite, useToggleFavoriteShip } from '@/hooks';
import { PageTitles } from '@/constants';

import { Starship } from '@/types';

/**
 * Favorites page with the list of starships marked as favorites
 *
 * @component
 *
 * @author Carlos Knopel
 */
const Favorites: FC = () => {
  const { favorites } = useContext(FavoritesContext);
  const { notes, setNote } = useContext(NotesContext);

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
          }}
          gap={6}
          mt={{ base: '42px', md: '60px' }}
        >
          {favorites.map((ship: Starship) => (
            <StarShipCard
              key={`${ship.name}-${ship.manufacturer}`}
              data={ship}
              isFavorite={isShipFavorite(ship)}
              favoriteButtonOnClick={() => handleToggleShipFavorite(ship)}
              isNotesBoxVisible
              notesText={notes[`${ship.name}-${ship.manufacturer}`] || ''}
              onNotesChange={(event) => setNote(ship, event.target.value)}
            />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Favorites;
