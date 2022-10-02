import React from 'react';
import {  Routes, Route, useRoutes, Router } from 'react-router-dom'
import * as ROUTES from './constants/routes';
import CreateController from './pages/create/CreateController';
import EventController from './pages/event/EventController';
import LandingController from './pages/landing/LandingController';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<LandingController />} />
        <Route path={ROUTES.CREATE} element={<CreateController />} />
        <Route path={ROUTES.EVENT} element={<EventController />} />
        <Route path={ROUTES.UNKNOWN} element={<main style={{ padding: "1rem" }}>  <p>There's nothing here!</p>  </main>} />
      </Routes>
    </div>
  );
}

export default App;
