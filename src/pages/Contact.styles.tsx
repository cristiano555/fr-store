import styled from 'styled-components'
import { autoSize } from '../helpers/styles'
import {
    colors,
    fonts,
    fontsSizes,
    fontsWeights,
    media,
    mainContainer
} from '../helpers/styles'


export const ContactContainer = styled.div`
    max-width: ${mainContainer}px;
    margin: auto;
    font-family: ${fonts.montserrat};
    p{
        line-height: 1.5;
    }
`