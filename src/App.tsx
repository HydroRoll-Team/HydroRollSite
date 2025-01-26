import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import HomePage from './HomePage';

const App: React.FC = () => {
  return (
    <NextUIProvider>
      <HomePage />
    </NextUIProvider>
  );
};

export default App;
