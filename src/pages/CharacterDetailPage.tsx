import { useParams, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CharacterContext } from "../context/characters-context";
import { EpisodeContext } from "../context/episodes-context";
import { ICharacter } from "../@types/core/character";
import { IEpisode } from "../@types/core/episode";

export default function CharacterDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { characters } = useContext(CharacterContext);
  const { episodes } = useContext(EpisodeContext);
  const [character, setCharacter] = useState<ICharacter | null>(null);
  const [characterEpisodes, setCharacterEpisodes] = useState<IEpisode[]>([]);

  useEffect(() => {
    const loadCharacterDetails = () => {
      if (!id || characters.length === 0) return;

      const foundCharacter = characters.find(
        (char) => char.id === parseInt(id)
      );
      setCharacter(foundCharacter || null);

      if (foundCharacter && episodes.length > 0) {
        const matchedEpisodes = foundCharacter.episode
          .map((epUrl) => {
            const epId = parseInt(epUrl.split("/").pop() || "");
            return episodes.find((ep) => ep.id === epId);
          })
          .filter((ep): ep is IEpisode => !!ep);

        setCharacterEpisodes(matchedEpisodes);
      }
    };

    loadCharacterDetails();
  }, [id, characters, episodes]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-80 object-contain rounded-lg mb-4"
          style={{ objectPosition: "center" }}
        />

        <h2 className="text-3xl font-bold text-center">{character.name}</h2>
        <p className="text-center text-gray-600">{character.species}</p>
        <p className="text-center text-gray-600">{character.gender}</p>
        <div className="mt-4">
          <h3 className="text-xl font-bold">Bölümler:</h3>
          <ul className="space-y-2">
            {characterEpisodes && characterEpisodes.length > 0 ? (
              characterEpisodes.map((ep) => (
                <li key={ep.id}>
                  <Link
                    to={`/episode/${ep.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    {ep.name}
                  </Link>
                </li>
              ))
            ) : (
              <li>
                Bu karakterin yer aldığı herhangi bir bölüm bulunmamaktadır.
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
