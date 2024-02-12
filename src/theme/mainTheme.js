import { createTheme } from '@mui/material/styles';
import { grey, red } from '@mui/material/colors';



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
            lighter: '#ffcdd2',
            light: '#ef9a9a',
            main: '#e57373',
            dark: '#ef5350',
            darker: '#f44336',
            contrastText: '#ffffff'
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