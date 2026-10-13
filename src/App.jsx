import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import LinkinParkTributePage from './pages/LinkinParkTributePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/linkin-park-tribute-quebec"
          element={<LinkinParkTributePage />}
        />

      </Routes>
    </BrowserRouter>
  );
}