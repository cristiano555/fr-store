import React, { Fragment, FC } from 'react'
import { useSelector } from 'react-redux'

import { translate } from '../i18n'
import { RootState } from '../redux-store'

import {AboutUsContainer} from './AboutUs.styles'
import Headline from '../components/Headline/Headline'

const AboutUs: FC = () => {

    const { language } = useSelector((state: RootState) => state.language)

    return (
        <AboutUsContainer>
            <Headline title={translate('aboutUsTitle', language)} />
            <p>{translate('aboutUsText', language)}</p>
        </AboutUsContainer>
    )
}

export default AboutUs;