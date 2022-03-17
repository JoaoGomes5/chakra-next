import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      300: '#e1e1e6',
      600: '#29292e',
      700: '#202024',
      "900": "#181B23",
      800: '#121214',
      "500": "#616480",
      "400": "#797D9A",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2",
    },
    purple: {
      500: '#8257e5'
    }
  },
  radii: {
    sm: '5px',
    md: '8px',
  },
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
    mono: 'Menlo, monospace'
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  styles: {
    global: {
      body: {
        bg: '#131216',
        color: 'gray.50'
      }
    }
  }
})