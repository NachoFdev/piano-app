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
            lighter: 'white',
            light: grey.A100,
            main: grey.A200,
            dark: grey.A300,
            darker: grey.A400,
            contrastText: '#ffffff'
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
            lighter: 'white',
            light: grey.A100,
            main: grey.A200,
            dark: grey.A300,
            darker: grey.A400,
            contrastText: '#ffffff'
        },
        info: {
            lighter: 'white',
            light: grey.A100,
            main: grey.A200,
            dark: grey.A300,
            darker: grey.A400,
            contrastText: '#ffffff'
        },
        success: {
            lighter: 'white',
            light: grey.A100,
            main: grey.A200,
            dark: grey.A300,
            darker: grey.A400,
            contrastText: '#ffffff'
        },
    },
});