import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Quiz from './components/Quiz/Quiz';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { AlarmContext } from './components/context/ContextAlarm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/quiz",
    element: <Quiz />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <RouterProvider router={router} />

  </React.StrictMode>
);

