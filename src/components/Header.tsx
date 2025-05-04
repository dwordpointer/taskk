import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-green-400">
          <div>Rick & Morty TASK</div>
        </h1>
        <ul className="flex space-x-6">
          <li>
            <Link 
              to="/characters" 
              className="text-lg hover:text-green-400 transition-colors"
            >
              Karakterler
            </Link>
          </li>
          <li>
            <Link 
              to="/episodes" 
              className="text-lg hover:text-green-400 transition-colors"
            >
              Bölümler
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
