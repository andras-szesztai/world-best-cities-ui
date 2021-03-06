import styled from '@emotion/styled'

import { designTokens } from 'styles/designTokens'

export const Container = styled.a<{ color: string }>`
    display: flex;
    align-items: center;
    text-align: left;
    cursor: pointer;

    background-color: ${({ color }) => color};

    padding: ${designTokens.space.xs}px;
    gap: ${designTokens.space.xs}px;
    border-radius: ${designTokens.borderRadius.md}px;
    border: ${designTokens.strokeWidth.lg}px solid ${designTokens.color.black};
    box-shadow: ${designTokens.boxShadow.sm};
    transition: all ${designTokens.duration.sm}ms;
    font-size: ${designTokens.fontSize.base};

    @media only screen and (min-width: ${designTokens.breakPoints.md}px) {
        padding: ${designTokens.space.sm}px;
        gap: ${designTokens.space.sm}px;
        font-size: ${designTokens.fontSize.md};
    }

    :hover {
        box-shadow: ${designTokens.boxShadow.md};
        transform: translateY(-${designTokens.space.xxs}px);
    }

    :focus {
        box-shadow: ${designTokens.boxShadow.md};
        transform: translateY(-4px);
        outline: none;
    }

    :active {
        box-shadow: ${designTokens.boxShadow.xs};
        transform: translateY(2px);
    }
`

export const Rank = styled.span`
    font-weight: ${designTokens.fontWeight.bold};
`

export const CardTitle = styled.h3`
    font-size: ${designTokens.fontSize.base};
    font-weight: ${designTokens.fontWeight.regular};
    margin: 0;

    @media only screen and (min-width: ${designTokens.breakPoints.md}px) {
        font-size: ${designTokens.fontSize.md};
    }
`
