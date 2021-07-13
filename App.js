import React from 'react';
import Home from './src/Home';

import { ThemeProvider } from 'styled-components'

const colors ={
  bg: '#262626',
  color: '#D3D3D3'
}

export default function App() {
  return (
    <ThemeProvider theme={colors}>
      <Home />
    </ThemeProvider>
  );
}
