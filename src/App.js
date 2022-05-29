import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchPage } from "./pages/searchPage";
import { DetailsPage } from "./pages/detailsPage";
import { PopularMoviesPage } from "./pages/popularMoviesPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path=":movieId" element={<DetailsPage />} />
          <Route path="/popular" element={<PopularMoviesPage />} />
        </Routes>
      </BrowserRouter>
      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}

export default App;
