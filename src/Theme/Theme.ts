
export type Theme = {
    colors: Color
}

type Color = {
    primary: string
    secondary: string
}

export const theme: { [key: string]: Theme } = {
    light: {
        colors: {
            primary: 'red',
            secondary: 'blue',
        }
    },
    dark: {
        colors: {
            primary: 'green',
            secondary: 'yellow',
        }
    },
}

