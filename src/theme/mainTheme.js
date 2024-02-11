import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';


export const mainTheme = createTheme({
    palette: {
        primary: {
            lighter: 'white',
            light: grey.A100,
            main: grey.A200,
            dark: grey.A300,
            darker: grey.A400,
            contrastText: '#ffffff'
        },
        secondary: {
            lighter: '#',
            light: '#',
            main: '#',
            dark: '#',
            darker: '#',
            contrastText: '#'
        },
        error: {
            lighter: '#',
            light: '#',
            main: '#',
            dark: '#',
            darker: '#',
            contrastText: '#'
        },
        warning: {
            lighter: '#',
            light: '#',
            main: '#',
            dark: '#',
            darker: '#',
            contrastText: '#'
        },
        info: {
            lighter: '#',
            light: '#',
            main: '#',
            dark: '#',
            darker: '#',
            contrastText: '#'
        },
        success: {
            lighter: '#',
            light: '#',
            main: '#',
            dark: '#',
            darker: '#',
            contrastText: '#'
        },
    },
});