import { useEffect, useState } from 'react';
import { IEpisode } from '../@types/core/episode';
import { EpisodeContext } from '../context/episodes-context';
import { fetchEpisodes } from '../libs/axios/api';

interface Props {
  children: React.ReactNode;
}

export default function EpisodeProvider({ children }: Props) {
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);

  useEffect(() => {
    const getEpisodes = async () => {
      try {
        const data = await fetchEpisodes();
        setEpisodes(data.results);
      } catch (error) {
        console.error('Failed to fetch episodes', error);
      }
    };

    getEpisodes();
  }, []);

  return (
    <EpisodeContext.Provider value={{ episodes, setEpisodes }}>
      {children}
    </EpisodeContext.Provider>
  );
}
