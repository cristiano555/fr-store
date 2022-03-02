import styled from 'styled-components'
import { autoSize } from '../../helpers/styles'
import {
    colors,
    fonts,
    fontsSizes,
    fontsWeights,
    media,
} from '../../helpers/styles'

export const HeaderElement = styled.header`
    // position: fixed;
    width: 100%;
    background-color: ${colors.black};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
`

export const MenuMain = styled.nav`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 1;
    font-family: ${fonts.roboto};
    font-weight: ${fontsWeights.normal};

    li{
        display: inline-block;
        padding: ${autoSize(15, 'all')}
    }
    
    a{
        text-decoration: none;
        text-transform: uppercase;
        color: ${colors.white};
    }
`

export const MenuLanguage = styled.div`
        color: ${colors.white};
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 1;
        font-family: ${fonts.roboto};
        font-weight: ${fontsWeights.normal};
`



