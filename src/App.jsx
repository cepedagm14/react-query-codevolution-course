import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import RQSuperHeroPage from "./components/RQSuperHero.page";
import HomePage from "./components/Home.page";
import SuperHeroPage from "./components/SuperHero.page";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import RQSuperHeroe from "./components/RQSuperHeroe";
import RQParallelQuery from "./components/RQParallelQuery";
import RQDinamicParallelQuerys from "./components/RQDinamicParallelQuerys";
import RQDependenQuery from "./components/RQDependenQuery";
import RQPaginatedQueries from "./components/RQPaginatedQueries";
import RQInfiniteQueries from "./components/RQInfiniteQueries";

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
              <li>
                <Link to="/rq-dinamic-parallel">Parallel Queys by ID</Link>
              </li>
              <li>
                <Link to="/rq-dependent">Dependent Query</Link>
              </li>
              <li>
                <Link to="/rq-paginated">Paginated Query</Link>
              </li>
              <li>
                <Link to="/rq-infinite">Infinited Query</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/super-heroes" element={<SuperHeroPage />} />
            <Route path="/rq-super-heroes" element={<RQSuperHeroPage />} />
            <Route path="/rq-parallel" element={<RQParallelQuery />} />
            <Route path="/rq-super-heroes/:heroId" element={<RQSuperHeroe />} />
            <Route
              path="/rq-dinamic-parallel"
              element={<RQDinamicParallelQuerys heroId={[1, 3]} />}
            />
            <Route
              path="/rq-dependent"
              element={<RQDependenQuery email="aurigak@aurigak.com" />}
            />
            <Route path="/rq-paginated" element={<RQPaginatedQueries />} />
            <Route path="/rq-infinite" element={<RQInfiniteQueries />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
