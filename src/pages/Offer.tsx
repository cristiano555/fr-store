import React, { Fragment, FC } from 'react'
import { useSelector } from 'react-redux'

import { translate } from '../i18n'
import { RootState } from '../redux-store'
import { OfferContainer } from './Offer.styles'
import Headline from '../components/Headline/Headline'


const Offer: FC = () => {

    const { language } = useSelector((state: RootState) => state.language)

    return (
        <OfferContainer>
            <Headline title={translate('offerTitle', language)}  />
            <p>{translate('offerText', language)}</p>
        </OfferContainer>
    )
}

export default Offer;