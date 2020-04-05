import React from 'react';
import { Route } from 'react-router-dom';
import VideoWatch from './Pages/VideoWatch/videoWatch';

const App = () => {
  return (
    <>
      <Route exact path='/' component={VideoWatch} />
    </>
  );
}

export default App;
