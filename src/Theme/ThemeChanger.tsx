import React from 'react'
import styled from '@emotion/styled';
import { withTheme } from '@emotion/react'

const ThemeChanger = ({ theme, themes, onChangeTheme }: { theme: any, themes: any, onChangeTheme: any }) => {

    return (
        <Container>
            CHANGE THEME:{' '}
            <select onChange={e => onChangeTheme(e.target.value)}>
                {themes.map((themeName: any) => (
                    <option key={themeName} value={themeName}>
                        {themeName}
                    </option>
                ))}
            </select>
        </Container>
    )
}

const Container = styled.div<any>`
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
  text-align: center;
  background-color: green;
`

export default withTheme(ThemeChanger)