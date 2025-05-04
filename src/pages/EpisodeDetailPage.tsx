import { useParams, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { EpisodeContext } from "../context/episodes-context";
import { CharacterContext } from "../context/characters-context";
import { IEpisode } from "../@types/core/episode";
import { ICharacter } from "../@types/core/character";

export default function EpisodeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { episodes } = useContext(EpisodeContext);
  const { characters } = useContext(CharacterContext);
  const [episode, setEpisode] = useState<IEpisode | null>(null);
  const [episodeCharacters, setEpisodeCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    const loadEpisodeDetails = () => {
      if (!id || episodes.length === 0) return;

      const ep = episodes.find((ep) => ep.id === parseInt(id));
      if (!ep) return;
      setEpisode(ep);
      const filteredCharacters = characters.filter((char) =>
        ep.characters.includes(char.url)
      );

      setEpisodeCharacters(filteredCharacters);
    };

    loadEpisodeDetails();
  }, [id, episodes, characters]);

  if (!episode) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-3xl font-bold text-center mb-2">{episode.name}</h2>
        <p className="text-center text-gray-600">
          Yayınlanma Tarihi: {episode.air_date}
        </p>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-2xl font-semibold mb-4 ">
          Bu bölümdeki karakterler:
        </h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {episodeCharacters.map((char) => (
            <li
              key={char.id}
              className="text-center transition-transform transform hover:scale-105"
            >
              <Link to={`/character/${char.id}`} className="block">
                <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                  <img
                    src={char.image}
                    alt={char.name}
                    className="w-20 h-20 object-cover rounded-full mx-auto mb-2"
                  />
                  <p className="text-blue-500 text-nowrap hover:underline max-w-xs overflow-hidden text-ellipsis">
                    {char.name}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
