import { ColorModeScript } from '@chakra-ui/react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import theme from '../theme'

export default class MyDocument extends Document {
   render() {
      return (
         <Html lang="pt-BR">
            <Head>
               <link rel="preconnect" href="https://fonts.googleapis.com" />
               <link rel="preconnect" href="https://fonts.gstatic.com" />
               <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <body>
               <ColorModeScript initialColorMode={theme.config.initialColorMode} />
               <Main />
               <NextScript />
            </body>
         </Html>
      )
   }
}