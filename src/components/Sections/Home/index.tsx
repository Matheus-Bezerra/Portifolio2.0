import { Box, Divider, Flex, Grid, keyframes, Text } from '@chakra-ui/react'
import React from 'react'
import { ListButton } from './components/ListButton'
import { ListIcon } from './components/ListIcon'
import {RxDoubleArrowDown} from 'react-icons/rx'
import dynamic from 'next/dynamic'
import { TextStack } from '../../TextStack'
const  TypewriterComponent = dynamic(() => import('typewriter-effect'), { ssr: false })

const animationKeyframes = keyframes`
  0% { transform: translate(0,0) }
  50% { transform: translate(0,20px) }
  100% { transform: translate(0,0) }
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;

export const HomeComponent = () => {
  return (
    <Flex as="section" minH="100vh" maxW="1440px" m={"0 auto"} px="2rem" gap=".4rem" flexDir={"column"} justify="center" textTransform={"uppercase"} position="relative" zIndex={0} id="home">
      <Box>
        <Text fontSize={["1.2rem", "1.3rem", "1.5rem", "1.5rem"]}>Olá, Meu nome é</Text>
      </Box>
      <Box>
        <Text fontSize={"clamp(26px, 8vw, 80px)"} color="blue.400" letterSpacing={"3px"} fontWeight="600">
        <TypewriterComponent
          onInit={(typewriter) => {
            typewriter.typeString('Matheus Bezerra')
              .pauseFor(3500)
              .start();
          }}
        />
          </Text>
      </Box>
      <TextStack fontSize={["1.2rem", "1.3rem", "1.5rem", "1.5rem"]}  />
      
      <ListIcon />

      <Divider bg="blue.500" />

      <ListButton />

      <Box as="a"  position="absolute" bottom={["20vh"]} left="50%" right="50%" animation={animation}>
        <RxDoubleArrowDown />
      </Box>
    </Flex>
  )
}
