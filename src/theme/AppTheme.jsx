import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { mainTheme } from './';


export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ mainTheme }>
        <CssBaseline />
        { children }
    </ThemeProvider>
  );
};
