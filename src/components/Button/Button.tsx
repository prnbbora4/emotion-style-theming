import React from 'react'
import { withTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { Theme } from '../../Theme/Theme'

type ButtonProps = {
    width: string
    children: any
    height: string
    onClick?: () => void
    variant?: string
}

type ButtonOptional = {
    theme: Theme
    buttonWidth?: string
    buttonHeight?: string
    variant?: string
}

const ButtonComponent = (props: ButtonProps & ButtonOptional) => {
    const { theme, width, children, height, onClick, variant } = props
    return (
        <ButtonContainer
            theme={theme}
            buttonWidth={width}
            buttonHeight={height}
            onClick={onClick}
            variant={variant}
        >
            {children}
        </ButtonContainer>
    )
}

const ButtonContainer = styled.button<ButtonOptional>`
    width: ${props => props.buttonWidth};
    height: ${props => props.buttonHeight};
    background-color: ${props => props.variant === 'primary' ? props.theme.colors.primary : props.theme.colors.secondary};
    cursor: pointer;
    &:hover {
        background-color: grey;
    }
`

export const Button = withTheme(ButtonComponent)