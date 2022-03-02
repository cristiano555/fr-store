import React, { FC } from 'react'
import { useSelector, useDispatch} from 'react-redux'

import { FooterElement } from './Footer.styles'
import { translate } from './../../i18n'
import { RootState } from './../../redux-store/index'

const Footer: FC = () => {

    const { language } = useSelector((state: RootState) => state.language )
    
    return (
        <FooterElement>
            <p>{translate('footerText', language)}</p>
        </FooterElement>
    )
}

export default Footer;