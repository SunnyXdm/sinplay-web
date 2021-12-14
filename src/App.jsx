import Header from "./components/Header";
import MiniPlayer from "./components/MiniPlayer";
import NavBar from "./components/NavBar";
import Rooms from "./components/Rooms";
import Song from "./components/SongCard";
import SongsCard from "./components/Songs";


function App() {
  return (
    <div className="">
      <Header />
      <Rooms />
      <SongsCard />
      <NavBar />
      <MiniPlayer />
    </div>
  );
}

export default App;
