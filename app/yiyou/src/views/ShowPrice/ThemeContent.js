import React,{Component} from 'react';
export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
    color:'#f60',
    changeState:()=>{console.log('change')}
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
    color:'#f60',
    changeState:()=>{console.log('change')}
  },
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);