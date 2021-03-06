import styled from '@emotion/styled'

import { designTokens } from 'styles/designTokens'

const CityCardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${designTokens.space.sm}px;

    @media only screen and (min-width: ${designTokens.breakPoints.sm}px) {
        gap: ${designTokens.space.base}px;
    }

    @media only screen and (min-width: ${designTokens.breakPoints.md}px) {
        gap: ${designTokens.space.md}px;
    }

    @media only screen and (min-width: ${designTokens.breakPoints.lg}px) {
        gap: ${designTokens.space.lg}px;
    }
`

export default CityCardsContainer
