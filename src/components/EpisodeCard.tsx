import { Link } from 'react-router-dom';

interface IEpisodeCardProps {
  episode: {
    id: number;
    name: string;
    episode: string;
    air_date: string;
  };
}

export function EpisodeCard({ episode }: IEpisodeCardProps) {
  return (
    <Link to={`/episode/${episode.id}`} className="block">
      <div className="bg-white shadow-lg rounded p-4 transition-transform transform hover:scale-105 hover:shadow-xl">
        <p className="font-bold text-nowrap max-w-md overflow-hidden text-ellipsis">{episode.name}</p>
        <p className="text-gray-600">{episode.episode}</p>
        <p className="text-gray-500 text-sm">{episode.air_date}</p>
      </div>
    </Link>
  );
}
