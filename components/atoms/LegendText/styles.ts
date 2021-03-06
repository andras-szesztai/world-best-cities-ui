import styled from '@emotion/styled'

import { designTokens } from 'styles/designTokens'

import { Props } from './types'

export const StyledSpan = styled.span<Pick<Props, 'color'>>`
    line-height: 1.7;
    font-weight: ${designTokens.fontWeight.bold};
    background-color: ${({ color }) => color};
    border-radius: ${designTokens.borderRadius.md}px;
    border: ${designTokens.strokeWidth.md}px solid ${designTokens.color.black};
    padding: 0 ${designTokens.space.xs}px;
    box-shadow: ${designTokens.boxShadow.sm};
`
