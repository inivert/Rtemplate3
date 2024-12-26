import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from './root';
import Home from './routes/Home';
import Menu from './routes/Menu';
import About from './routes/About';
import Contact from './routes/Contact';
import ErrorBoundary from './components/ErrorBoundary';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: 'menu',
        element: <Menu />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: 'about',
        element: <About />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: 'contact',
        element: <Contact />,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
});

export default router; 