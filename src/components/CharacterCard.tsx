import { Link } from 'react-router-dom';
import { ICharacter } from '../@types/core/character';

interface ICharacterCardProps {
  character: ICharacter;
}

export const CharacterCard: React.FC<ICharacterCardProps> = ({ character }) => {
  return (
    <Link to={`/character/${character.id}`} className="group">
      <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform group-hover:scale-105">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <p className="text-center font-bold text-nowrap max-w-xs overflow-hidden text-ellipsis">{character.name}</p>

        <p className="text-center text-gray-500">{character.species}</p>
      </div>
    </Link>
  );
};
