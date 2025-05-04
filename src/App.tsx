import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import EpisodeProvider from "./provider/episodes-provider";
import CharacterProvider from "./provider/characters-provider";

function App() {
  return (
    <EpisodeProvider>
      <CharacterProvider>
        <RouterProvider router={router} />
      </CharacterProvider>
    </EpisodeProvider>
  );
}

export default App;
