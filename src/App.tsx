import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { router } from './router';

function App() {
  return (
    <Routes>
      {Object.values(router).map(route => {
        return (
          <Route
            element={<route.Element />}
            key={`route-${route.path}`}
            path={route.path}
          />
        );
      })}
    </Routes>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;
