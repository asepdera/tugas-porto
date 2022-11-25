import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '../styles/globals.css'

const theme = extendTheme({
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth'
      },
      body: {
        bg: '#f5f6fc',
        overflowX: 'hidden'
      }
    }
  },
  colors: {
    'main': '#232224',//'#121122',//
    'secondary': '#EEECC9',//'#020623',//'#474448',//'#2d232e',
    'accent': '#3d233e'//'#e0ddcf'
  },
  shadows: {
    custom: '3px 14px 99px 5px rgba(0,0,0,0.1)',
    bawah: '0px 100px 90px 0px rgba(0,0,0,0.33)'
  }
})

function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
}

export default MyApp
