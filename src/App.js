import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageFilms from "./pages/Films/Films";
import PageListing from "./pages/Listing/Listing";
import PageHome from "./pages/Home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/films" element={<PageFilms />} />
          <Route path="/listing" element={<PageListing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
