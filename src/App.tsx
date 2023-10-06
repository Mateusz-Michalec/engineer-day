import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home/Home";
import Exhibitions from "./pages/Exhibitions/Exhibitions";
import ExhibitionDetails from "./pages/Exhibitions/ExhibitionDetails";
import Speakers from "./pages/Speakers/Speakers";
import "./App.scss";
import SpeakerDetails from "./pages/Speakers/SpeakerDetails";
import EventProgram from "./pages/EventProgram/EventProgram";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="map">
          <Route index element={<Exhibitions />} />
          <Route path=":id" element={<ExhibitionDetails />} />
        </Route>

        <Route path="speakers">
          <Route index element={<Speakers />} />
          <Route path=":id" element={<SpeakerDetails />} />
        </Route>
        <Route path="program-wydarzenia" element={<EventProgram />} />
        <Route path="*" element={<Layout />} />
      </Route>
    </Routes>
  );
}

export default App;
