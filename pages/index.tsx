import { Box, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head'
import { About } from '../src/components/About';
import { Header } from '../src/components/Header';
import { HomeComponent } from '../src/components/Home';

export default function Home() {
  const bg = useColorModeValue('gray.800', "whiteAlpha.900")
  const color = useColorModeValue('white', 'black')
  
  return (
    <>
      <Head>
        <title>Matheus Bezerra</title>
        <meta name="description" content="Portifólio de Matheus Bezerra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box bg={bg} minH="100vh" color="white" fontFamily={"Inter, sans-serif"} boxSizing="border-box" textColor={color} scrollBehavior="smooth">
        <Header />
        <HomeComponent />
        <About />
      </Box>
    </>
  )
}
