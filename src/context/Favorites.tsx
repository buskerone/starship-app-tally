import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
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

export default function FavoritesProvider({
  children,
}: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<Starship[]>([]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}
