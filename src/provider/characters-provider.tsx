import { useEffect, useState } from 'react';
import { ICharacter } from '../@types/core/character';
import { CharacterContext } from '../context/characters-context';
import { fetchCharacters } from '../libs/axios/api';

interface Props {
  children: React.ReactNode;
}

export default function CharacterProvider({ children }: Props) {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const data = await fetchCharacters();
        setCharacters(data.results);
      } catch (error) {
        console.error('Failed to fetch characters', error);
      }
    };

    getCharacters();
  }, []);

  return (
    <CharacterContext.Provider value={{ characters, setCharacters }}>
      {children}
    </CharacterContext.Provider>
  );
}
