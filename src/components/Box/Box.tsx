import styled from '@emotion/styled/macro'
import { compose, typography, space, color, layout, flexbox } from 'styled-system'

export const Box = (props: any) => {
    const { children, ...rest } = props
    return (
        <BoxStyle
            fontSize={4}
            fontWeight='bold'
            p={3}
            mb={4}
            color='white'
            bg='primary'
            {...rest}
        >{children}</BoxStyle>
    )
}

const BoxStyle = styled('div')(
    compose(typography,
        space,
        color,
        layout,
        flexbox)
)