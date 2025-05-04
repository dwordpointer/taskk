import { createContext } from 'react';
import { IEpisode } from '../@types/core/episode';

interface EpisodeContextValue {
  episodes: IEpisode[];
  setEpisodes: (episodes: IEpisode[]) => void;
}

export const EpisodeContext = createContext<EpisodeContextValue>({
  episodes: [],
  setEpisodes: () => {},
});
