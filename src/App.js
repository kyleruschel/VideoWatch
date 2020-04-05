import React from 'react';
import { Switch, Route } from 'react-router-dom';
import VideoWatch from './Pages/VideoWatch/videoWatch';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={VideoWatch} />
    </Switch>
  );
}

export default App;
