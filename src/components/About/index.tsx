import { Avatar, Box, Flex, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import { TextStack } from '../TextStack'

export const About = () => {
  return (
    <Flex as="section" minH={["100vh", "100vh", "calc(100vh - 70px)", "calc(100vh - 70px)"]} maxW="1440px" m={"0 auto"} px="2rem" gap="3rem" flexDir="column" id="about" py="1.6rem">
      <Box borderBottom={"4px solid #4299E1"} w="fit-content" margin="0 auto" borderRadius={"8px"}>
        <Text as="h1" textAlign={"center"} fontSize="2rem" textTransform={"uppercase"} letterSpacing="3px">Sobre mim</Text>
      </Box>
      <Flex flex={1} align="center" gap={["1.5rem", "2rem", "3rem", "4rem"]} flexWrap={"wrap"}>
        <Flex gap={["2rem", "2rem", "3rem", "3rem"]} flexDir={["column", "column", "row", "row"]} alignItems={["center", "center", "flex-start", "flex-start"]}>
          <Box minW={["200px", "200px", "200px", "300px"]} minH={["200px", "200px", "200px", "300px"]} maxH={["200px", "200px", "200px", "300px"]} maxW={["200px", "200px", "200px", "300px"]}>
            <Avatar size='full' name='Segun Adebayo' src='https://bit.ly/dan-abramov' />
          </Box>
          <Grid gap="1rem">
            <Box>
              <TextStack fontSize={["1.2rem", "1.3rem", "1.5rem", "1.5rem"]} color="blue.400" fontWeight="500" />
            </Box>
            <Text letterSpacing="1px" lineHeight="1.5rem">Olá! Eu sou uma pessoa que passou por diversas experiências com desenvolvimento de múltiplos sistemas, produtos digitais e construções de aplicativos IOS | Android. Foco na melhor experiência e usabilidade do usuário, inclusive tenho uma cultura de aprendizagem contínua e de inovação.</Text>

            <Text letterSpacing="1px" lineHeight="1.5rem">Estou desde Janeiro de 2022 na J4s Tech, sendo responsável por todo o planejamento e codificação da parte visual dos softwares, participando no desevolvimento de Dashboards, produtos digitais, Design de sistemas e aplicativos, Templates de email e landing pages.</Text>

            <Text letterSpacing="1px" lineHeight="1.5rem">Ignite (Rocketseat) - Estou no programa de aceleração para programadores, seguindo as trilhas de React, React Native e Node. Com este curso obtive diversas experiências no desenvolvimento de formulários com React Hook Form, estilização com ChakraUI, requisições com Axios, criações de documentações e testes com Storybook, renderização da página com servidor usando Next, testes unitários com Jest, desenvolvimento de aplicativos IOS e Android com as bibliotecas Native Base e Styled Components do React Native.</Text>
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  )
}
