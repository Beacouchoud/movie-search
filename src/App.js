import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchPage } from "./pages/searchPage";
import { DetailsPage } from "./pages/detailsPage";
import { PopularMoviesPage } from "./pages/popularMoviesPage";
import { useState } from "react";

function App() {
  const [searchSeries, setSearchSeries] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage searchSeries={searchSeries} setSearchSeries={setSearchSeries} />} />
          <Route path=":movieId" element={<DetailsPage  searchSeries={searchSeries} setSearchSeries={setSearchSeries} />} />
          <Route path="/popular" element={<PopularMoviesPage searchSeries={searchSeries} setSearchSeries={setSearchSeries}  />} />
        </Routes>
      </BrowserRouter>
      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
}

export default App;
