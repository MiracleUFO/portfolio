import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div className='App'>
      <Routes location={location || background}>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
