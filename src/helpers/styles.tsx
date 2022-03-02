/**
* global styles
*/
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');


    *,
    *::after,
    *::before {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

  
 
`
export default GlobalStyle

/**
* functions
*/
export const autoSize = (size: number, device: string) => {
    if (device === 'mobile') {
        return `${(size * 100) / breakpoint}vw`
    } else {
        return `${(size * 100) / theWidestResolution}vw`
    }
}

/**
* variables
*/
export const breakpoint: number = 1024
export const theWidestResolution: number = 1920
export const media: string = `(min-width: ${breakpoint}px)`
export const mainContainer = 1200

export const colors = {
    white: '#FFF',
    black: "#000",
    darkGray: '#0C0C0C',
    lightGray: '#F0F2F5',
    red: '#b50c00',
}

export const fonts = {
    roboto: `'Roboto', sans-serif`,
    montserrat: `'Montserrat', sans-serif`,
}

export const fontsSizes = {
    mobile: {
        xxl: '8.79vw', //90px
        xl: '7.62vw', //78px
        l: '5.47vw', //56px
        m: '3.71vw', //38px
        s: '3.13vw', //32px
        xs: '2.73vw', //28px
    },
    desktop: {
        xxl: '3.02vw', //58px
        xl: '2.19vw', //42px
        l: '1.35vw', //26px
        m: '0.94vw', //18px
        s: '0.85vw', 
        xs: '0.73vw', //14px
    },
}

export const fontsWeights = {
    normal: '400',
    medium: '500',
    bold: '700',
}




