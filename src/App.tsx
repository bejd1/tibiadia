import "./index.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Nav } from "./components/nav";
import HighScores from "./pages/highscores/highscores";
import SharedCalculator from "./pages/sharedCalculator/sharedCalculator";
import Screenshots from "./pages/screenshots/screenshots";
import Characters from "./pages/chars/chars";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/tibiadia" element={<Characters />} />
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
      </QueryClientProvider>
    </div>
  );
}

export default App;
