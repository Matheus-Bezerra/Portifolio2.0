import { Box, Button, ButtonGroup, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { CardComponent } from '../../Card'
import { TitleSections } from '../../TitleSections'

export const Projects = () => {

  return (
    <Flex as="section" minH={["100vh", "100vh", "calc(100vh - 70px)", "calc(100vh - 70px)"]} maxW="1440px" m={"0 auto"} px="2rem" gap="3rem" flexDir="column" id="projects" py="1.6rem">
      <TitleSections>Projetos</TitleSections>
      <Flex flex={1} align="center" gap={["1.5rem", "2rem", "3rem", "4rem"]} flexWrap={"wrap"}>
        <CardComponent link={{url: 'https://www.google.com/logos/doodles/2022/seasonal-holidays-2022-6753651837109831.8-ladc.gif', textAlt: 'Fonte google'}} image='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' heading="Living room Sofa" description='This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.'>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Buy now
            </Button>
          </ButtonGroup>
        </CardComponent>
      </Flex>
    </Flex>
  )
}
