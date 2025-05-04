import { createContext } from 'react';
import { ICharacter } from '../@types/core/character';

interface CharacterContextValue {
  characters: ICharacter[];
  setCharacters: (characters: ICharacter[]) => void;
}

export const CharacterContext = createContext<CharacterContextValue>({
  characters: [],
  setCharacters: () => {},
});
