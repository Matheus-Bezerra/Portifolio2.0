import { Box, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head'
import { Header } from '../src/components/Header';

export default function Home() {
  const bg = useColorModeValue('gray.800', "whiteAlpha.900")
  const color = useColorModeValue('white', 'black')

  console.log('renderizei novamente')
  
  return (
    <>
      <Head>
        <title>Matheus Bezerra</title>
        <meta name="description" content="Portifólio de Matheus Bezerra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box bg={bg} minH="100vh" color="white" fontFamily={"Inter, sans-serif"} boxSizing="border-box" >
        <Header />
      </Box>
    </>
  )
}
