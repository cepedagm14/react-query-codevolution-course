import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import RQSuperHeroPage from "./components/RQSuperHero.page";
import HomePage from "./components/Home.page";
import SuperHeroPage from "./components/SuperHero.page";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroes">Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/super-heroes" element={<SuperHeroPage />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
