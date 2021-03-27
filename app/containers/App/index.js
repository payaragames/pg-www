import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes, routesMobile } from './routes';

export default function App() {
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  return (
    <>
      <Switch>
        {(width < 900 ? routesMobile : routes).map(route => (
          <Route
            key={route.id}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
      </Switch>
    </>
  );
}
