import { useContext } from 'react';
import { FavoritesContext } from '@/context/Favorites';
import { Starship } from '@/types';

const useIsShipFavorite = () => {
  const { favorites } = useContext(FavoritesContext);

  const isShipFavorite = (ship: Starship): boolean => {
    return favorites.some(
      (favorite) =>
        favorite.name === ship.name &&
        favorite.manufacturer === ship.manufacturer
    );
  };

  return isShipFavorite;
};

export default useIsShipFavorite;
