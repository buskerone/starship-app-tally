import { useContext } from 'react';
import { FavoritesContext } from '@/context/FavoritesContext';
import { Starship } from '@/types';

const useToggleFavoriteShip = () => {
  const { setFavorites } = useContext(FavoritesContext);

  const handleToggleShipFavorite = (ship: Starship) => {
    setFavorites((prevFavorites: Starship[]) => {
      const isFavorite = prevFavorites.some(
        (favorite) =>
          favorite.name === ship.name &&
          favorite.manufacturer === ship.manufacturer
      );

      if (isFavorite) {
        return prevFavorites.filter(
          (favorite) =>
            !(
              favorite.name === ship.name &&
              favorite.manufacturer === ship.manufacturer
            )
        );
      }

      return [...prevFavorites, ship];
    });
  };

  return handleToggleShipFavorite;
};

export default useToggleFavoriteShip;
