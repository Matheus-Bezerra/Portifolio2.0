import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { TitleSections } from '../../TitleSections'
import { Cards } from './components/Cards'

export const Projects = () => {

  return (
    <Flex as="section" minH={["100vh", "100vh", "calc(100vh - 70px)", "calc(100vh - 70px)"]} maxW="1440px" m={"0 auto"} px="2rem" gap="3rem" flexDir="column" id="projects" py="1.6rem">
      <TitleSections>Projetos</TitleSections>
      <Flex flex={1} align="center" justifyContent={["center", "center", "center", "center", "space-between"]} gap={["1.5rem", "2rem", "3rem", "3.5rem 2rem"]} flexWrap={"wrap"}>
        <Cards />
      </Flex>

      <Flex justify="center">
        <Button cursor={"pointer"} variant="solid" colorScheme={"blue"} as="a" href="https://github.com/Matheus-Bezerra" target="_blank">Ver mais</Button>
      </Flex>
    </Flex>
  )
}
