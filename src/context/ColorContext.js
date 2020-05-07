import {createContext} from 'react';

const ColorContext = createContext({
  main: 'black'
});

export const ColorProvider = ColorContext.Provider;

export default ColorContext;