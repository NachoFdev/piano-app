import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { mainTheme } from './';


export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider Theme={ mainTheme }>
        <CssBaseline />
        { children }
    </ThemeProvider>
  );
};
