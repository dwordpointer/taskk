import { useContext } from "react";
import { CharacterContext } from "../context/characters-context";
import { CharacterCard } from "../components/CharacterCard";

export default function CharactersPage() {
  const { characters } = useContext(CharacterContext);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {characters.map((char) => (
        <CharacterCard key={char.id} character={char} />
      ))}
    </div>
  );
}
