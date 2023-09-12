import "./index.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Nav } from "./components/nav";
import HighScores from "./pages/highscores/highscores";
import SharedCalculator from "./pages/sharedCalculator/sharedCalculator";
import Screenshots from "./pages/screenshots/screenshots";
import Characters from "./pages/chars/chars";
import { QueryClient, QueryClientProvider } from "react-query";
import { Box, Typography } from "@mui/material";

function App() {
  const queryClient = new QueryClient();
  return (
    <Box className="App">
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
                <Box className="page-not-exist">
                  <Typography variant="h2">This page does not exist</Typography>
                  <Link to="/tibiadia">
                    <button className="page-not-exits-btn">back to home</button>
                  </Link>
                </Box>
              }
            />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Box>
  );
}

export default App;
