import React, { Fragment, FC } from 'react'
import { useSelector } from 'react-redux'

import { translate } from '../i18n'
import { RootState } from '../redux-store'
import { ContactContainer } from './Contact.styles'
import Headline from '../components/Headline/Headline'

const Contact: FC = () => {

    const { language } = useSelector((state: RootState) => state.language)

    return (
        <ContactContainer>
            <Headline title={translate('contactTitle', language)} />
            <p>{translate('contactFormDisclaimert', language)}</p>
        </ContactContainer>
    )
}

export default Contact;