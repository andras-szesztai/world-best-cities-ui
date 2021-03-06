import styled from '@emotion/styled'

import { designTokens } from 'styles/designTokens'

export const Container = styled.a<{ color: string }>`
    display: flex;
    justify-content: space-between;
    position: relative;
    text-align: left;
    cursor: pointer;

    background-color: ${({ color }) => color};

    height: ${designTokens.space['3xl']}px;
    padding: ${designTokens.space.sm}px;
    border-radius: ${designTokens.borderRadius.lg}px;
    border: ${designTokens.strokeWidth.lg}px solid ${designTokens.color.black};
    box-shadow: ${designTokens.boxShadow.md};
    transition: all ${designTokens.duration.sm}ms;

    :hover {
        box-shadow: ${designTokens.boxShadow.lg};
        transform: translateY(-${designTokens.space.xxs}px);
    }

    :focus {
        box-shadow: ${designTokens.boxShadow.lg};
        transform: translateY(-4px);
        outline: none;
    }

    :active {
        box-shadow: ${designTokens.boxShadow.sm};
        transform: translateY(2px);
    }
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
`

export const Rank = styled.span`
    font-size: ${designTokens.fontSize.md};
    line-height: 0.75;
    font-weight: ${designTokens.fontWeight.bold};

    @media only screen and (min-width: ${designTokens.breakPoints.sm}px) {
        font-size: ${designTokens.fontSize.xl};
    }
`

export const CardTitle = styled.h3`
    font-size: ${designTokens.fontSize.md};
    font-weight: ${designTokens.fontWeight.regular};
    margin: 0;
    line-height: 1;
`
