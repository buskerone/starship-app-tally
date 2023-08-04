import { ReactNode, createContext, useState } from 'react';
import { Starship } from '@/types';

type NotesContextType = {
  notes: { [key: string]: string };
  setNote: (ship: Starship, note: string) => void;
};

const defaultCtx = {
  notes: {},
  setNote: () => {},
} as NotesContextType;

export const NotesContext = createContext<NotesContextType>(defaultCtx);

type NotesProviderProps = {
  children: ReactNode;
};

export default function NotesProvider({ children }: NotesProviderProps) {
  const [notes, setNotes] = useState<{ [key: string]: string }>({});

  const setNote = (ship: Starship, note: string) => {
    setNotes((prevNotes) => ({
      ...prevNotes,
      [`${ship.name}-${ship.manufacturer}`]: note,
    }));
  };

  return (
    <NotesContext.Provider value={{ notes, setNote }}>
      {children}
    </NotesContext.Provider>
  );
}
