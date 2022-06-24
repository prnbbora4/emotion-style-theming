import { ThemeProvider } from '@emotion/react'
import React from 'react';
import { Button } from './components/Button'
import { theme } from './Theme/Theme'
import ThemeChanger from './Theme/ThemeChanger'
import { Box } from './components/Box'

const App = () => {
  console.log("theme", theme);
  const [curTheme, setCurTheme] = React.useState(theme.light);
  // const handleClick = () => {
  //   console.log("handleClick");
  // }
  const handleThemeChange = (themeName: string): void => {
    console.log("called");
    setCurTheme(theme[themeName]);
  }

  return (
    <ThemeProvider theme={curTheme}>
      {/* <Button
        width='120px'
        height="60px"
        onClick={handleClick}
        variant="primary"
      >Click 🤣</Button> */}
      <ThemeChanger
        onChangeTheme={handleThemeChange}
        themes={Object.keys(theme)}
        theme={theme}
      />

      {/* <Box
        p={7}
        bg='secondary'
        as='button'
        css={{
          borderRadius: '4',
          border: '10px dotted #black',
        }}>
        Hello
      </Box> */}

      <Box
        p={1}
        bg='secondary'
        as='button'
        width={[1, 1 / 2, 1 / 4]}>
        Hello
      </Box>

    </ThemeProvider>
  )
}

export default App