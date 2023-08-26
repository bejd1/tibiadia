import "./index.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Nav } from "./components/nav";
import { Home } from "./pages/home/home";
import HighScores from "./pages/highscores/highscores";
import SharedCalculator from "./pages/sharedCalculator/sharedCalculator";
import Screenshots from "./pages/screenshots/screenshots";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/tibiadia" element={<Home />} />
          <Route path="/highscores" element={<HighScores />} />
          <Route path="/calculator" element={<SharedCalculator />} />
          <Route path="/screenshots" element={<Screenshots />} />

          <Route
            path="*"
            element={
              <div className="page-not-exist">
                <h2>This page does not exist</h2>
                <Link to="/tibiadia">
                  <button className="page-not-exits-btn">back to home</button>
                </Link>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
