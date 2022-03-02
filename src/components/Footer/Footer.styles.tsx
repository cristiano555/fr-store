import styled from 'styled-components'
import { autoSize } from '../../helpers/styles'
import {
    colors,
    fonts,
    fontsSizes,
    fontsWeights,
    media,
} from '../../helpers/styles'

export const FooterElement = styled.footer`
    margin: ${autoSize(30, 'all')} auto 0 auto;
    width: 100%;
    background-color: ${colors.black};
    color: ${colors.white};
    p{
        padding: ${autoSize(15, 'all')};
        text-align: center;
        font-family: ${fonts.roboto};
        font-weight: ${fontsWeights.normal};
    }
`



