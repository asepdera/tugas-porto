import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'main'
      }
    }
  },
  colors: {
    'main': '#232224',//'#121122',//
    'secondary': '#EEECC9',//'#020623',//'#474448',//'#2d232e',
    'accent': '#3d233e'//'#e0ddcf'
  }
})

function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
}

export default MyApp
