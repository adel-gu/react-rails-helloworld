import React from 'react';
// Routers
import { Routes, Route } from 'react-router-dom';

// Redux store
import { Provider } from 'react-redux';
import store from '../redux/configureStore';

// Components
import Message from './Message';

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Message />} />
      </Routes>
    </Provider>
  );
};

export default App;
