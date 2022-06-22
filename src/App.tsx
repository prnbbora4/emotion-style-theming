import { ThemeProvider } from '@emotion/react'
import React from 'react';
import { Button } from './components/Button'
import { theme } from './Theme/Theme'
import ThemeChanger from './Theme/ThemeChanger'
const App = () => {
  console.log("theme", theme);
  const [curTheme, setCurTheme] = React.useState(theme.light);
  const handleClick = () => {
    console.log("handleClick");
  }
  const handleThemeChange = (themeName: string): void => {
    console.log("called");
    setCurTheme(theme[themeName]);
  }

  return (
    <ThemeProvider theme={curTheme}>
      <Button
        width='120px'
        height="60px"
        onClick={handleClick}
        variant="primary"
      >Click 🤣</Button>

      <ThemeChanger
        onChangeTheme={handleThemeChange}
        themes={Object.keys(theme)}
        theme={theme}
      />
    </ThemeProvider>
  )
}

export default App