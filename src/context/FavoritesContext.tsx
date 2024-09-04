import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  useEffect,
} from 'react';
import { Starship } from '@/types';

export interface IFavoritesContext {
  favorites: Starship[];
  setFavorites: Dispatch<SetStateAction<Starship[]>>;
}

const defaultCtx = {
  favorites: [],
  setFavorites: () => {},
} as IFavoritesContext;

export const FavoritesContext = createContext<IFavoritesContext>(defaultCtx);

type FavoritesProviderProps = {
  children: ReactNode;
};

const getInitialState = () => {
  const favorites = localStorage.getItem('favorites');
  return favorites ? JSON.parse(favorites) : [];
};

export default function FavoritesProvider({
  children,
}: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<Starship[]>(getInitialState);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}
