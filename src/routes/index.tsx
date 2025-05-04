import { createBrowserRouter } from 'react-router-dom';
import CharactersPage from '../pages/CharactersPage';
import EpisodesPage from '../pages/EpisodesPage';
import CharacterDetailPage from '../pages/CharacterDetailPage';
import EpisodeDetailPage from '../pages/EpisodeDetailPage';
import RootLayout from '../layouts/RootLayout';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/characters",
        element: <CharactersPage />,
      },
      {
        path: '/character/:id',
        element: <CharacterDetailPage />,
      },
      {
        path: '/episodes',
        element: <EpisodesPage />,
      },
      {
        path: '/episode/:id',
        element: <EpisodeDetailPage />,
      },
    ],
  },
]);
