import React, {FC} from 'react'
import { HeadlineContainer } from './Headline.styles'

interface Props {
    title: string | React.ReactNode
 }

const Headline = ({title}: Props) => {

    return (
        <HeadlineContainer>
            <h2>{title}</h2>
        </HeadlineContainer>
    )
}


export default Headline