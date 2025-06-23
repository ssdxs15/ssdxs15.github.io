import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GameModeSelection from './pages/GameModeSelection';
import RegularMode from './pages/RegularMode';
import TimedMode from './pages/TimedMode';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GameModeSelection />} />
        <Route path="/regular" element={<RegularMode />} />
        <Route path="/timed" element={<TimedMode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
