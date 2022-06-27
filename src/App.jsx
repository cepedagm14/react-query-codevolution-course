import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import RQSuperHeroPage from "./components/RQSuperHero.page";
import HomePage from "./components/Home.page";
import SuperHeroPage from "./components/SuperHero.page";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import RQSuperHeroe from "./components/RQSuperHeroe";
import RQParallelQuery from "./components/RQParallelQuery";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
              <li>
                <Link to="/rq-parallel">RQ Parallel Querys</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/rq-parallel" element={<RQParallelQuery />} />
            <Route path="/rq-super-heroes/:heroId" element={<RQSuperHeroe />} />
            <Route path="/super-heroes" element={<SuperHeroPage />} />
            <Route path="/rq-super-heroes" element={<RQSuperHeroPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
