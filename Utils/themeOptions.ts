import { Theme } from '@react-navigation/native';

export const LightTheme:Theme = {
    dark: false,

    colors: {
        background: "#F8F5FF",
        text: "#2E046D",
        primary: "#5636A7",
        card: '#fff',
        border: '#eee',
        notification: '#fff'
    },
    fonts: {
        regular: {
            fontFamily: '',
            fontWeight: 'bold'
        },
        medium: {
            fontFamily: '',
            fontWeight: 'bold'
        },
        bold: {
            fontFamily: '',
            fontWeight: 'bold'
        },
        heavy: {
            fontFamily: '',
            fontWeight: 'bold'
        }
    }
}

 

export const DarkTheme:Theme = {
    dark: true,
  
    colors: {
        background: "#191818",
        text: "#FFFFFF",
        primary: "#9D71FF",
        border: "#595a5b",
        card: '#fff',
        notification: '#fff'
    },
    fonts: {
        regular: {
            fontFamily: '',
            fontWeight: 'bold'
        },
        medium: {
            fontFamily: '',
            fontWeight: 'bold'
        },
        bold: {
            fontFamily: '',
            fontWeight: 'bold'
        },
        heavy: {
            fontFamily: '',
            fontWeight: 'bold'
        }
    }
}
