import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Reception from './pages/Reception/Reception';
import Floor from './pages/Floor/Floor';
import Forbidden from './pages/Forbidden/Forbidden';
import PrivateRoute from './utils/PrivateRoute';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Reception />} />

          <Route
            path="floor/:index"
            element={<PrivateRoute component={<Floor />} />}
          />

          <Route path="forbidden" element={<Forbidden />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
