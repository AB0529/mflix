import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Admin from './pages/admin';
import NotFound from './pages/notFound'
import Search from './pages/search'
import Player from './pages/player';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="" element={ <Home /> } />
          <Route path="/admin" element={ <Admin /> } />
          <Route path="/search/:query" element={ <Search /> } />
          <Route path="/player/:query" element={ <Player /> } />

          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
