import React, { Fragment, FC } from 'react'
import { useSelector } from 'react-redux'

import { translate } from '../i18n'
import { RootState } from '../redux-store'


const B2B: FC = () => {

    const { language } = useSelector((state: RootState) => state.language)

    return (
        <Fragment>
            {/* <p>{translate('aboutUsText', language)}</p> */}
            <p>B2B system welcome</p>
        </Fragment>
    )
}

export default B2B;