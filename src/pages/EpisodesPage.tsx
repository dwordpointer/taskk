import { useContext } from 'react';
import { EpisodeCard } from '../components/EpisodeCard';
import { EpisodeContext } from '../context/episodes-context';

export default function EpisodesPage() {
  const { episodes } = useContext(EpisodeContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {episodes.map((ep) => (
        <EpisodeCard key={ep.id} episode={ep} />
      ))}
    </div>
  );
}
