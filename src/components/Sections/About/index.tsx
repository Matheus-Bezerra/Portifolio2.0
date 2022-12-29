import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { TitleSections } from '../../TitleSections'
import { Description } from './Description'
import AvatarMatheus from '../../../assets/MatheusPort.png'

export const About = () => {
  return (
    <Flex as="section" minH={["100vh", "100vh", "calc(100vh - 70px)", "calc(100vh - 70px)"]} maxW="1440px" m={"0 auto"} px="2rem" gap="3rem" flexDir="column" id="about" py="1.6rem">
      <TitleSections>Sobre mim</TitleSections>
      <Flex flex={1} align="center" gap={["1.5rem", "2rem", "3rem", "4rem"]} flexWrap={"wrap"}>
        <Flex gap={["2rem", "2rem", "3rem", "3rem"]} flexDir={["column", "column", "row", "row"]} alignItems={["center", "center", "flex-start", "flex-start"]}>
          <Box minW={["200px", "200px", "200px", "300px"]} minH={["200px", "200px", "200px", "300px"]} maxH={["200px", "200px", "200px", "300px"]} maxW={["200px", "200px", "200px", "300px"]}>
            <Avatar size='full' name='Matheus Bezerra' src="https://i.imgur.com/OOpA1Pt.png" />
          </Box>
          <Description />
        </Flex>
      </Flex>
    </Flex>
  )
}
