import React from 'react'
import { Box, Flex, IconButton, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Logo } from './components/Logo'
import { NavLink } from './components/NavLink'
import { MenuMobile } from './components/MenuMobile'

export const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  const bgHeader = useColorModeValue('gray.900', 'white')
  const color = useColorModeValue('white', 'black')

  return (
    <>
    <Box bg={bgHeader} as="header" position={["inherit", "inherit", "fixed", "fixed"]} w="100%" color={color} zIndex={1}>
      <Flex justifyContent={"space-between"} align="center" h={["50px", "50px", "70px", "70px"]} maxW="1440px" m={"0 auto"} as="section" gap="1.5rem" px="2rem">
        <Logo />
        <Text as="h2" fontSize="1rem" display={["block", "block", "none", "none"]}>Matheus Bezerra</Text>
        <Flex as="nav" alignItems="center">
          <Flex gap="2rem" as="ul" display={['none', 'none', 'flex', 'flex']}>
            <NavLink as="a"  path="#home" alt="Seção de apresentação do Matheus Bezerra">Home</NavLink>
            <NavLink as="a"  path="#about" alt="Seção sobre o Matheus Bezerra">Sobre</NavLink>
            <NavLink as="a"  path="#projects" alt="Seção de projetos de Matheus Bezerra">Projetos</NavLink>
            <NavLink as="a"  path="#contact" alt="Meios de contato do Matheus Bezerra">Contato</NavLink>
          </Flex>
          <IconButton aria-label="Botão de alterar tema da página" ml="calc(2rem - 4px)" p="12px" borderRadius="9999px" bg="gray.700" _hover={{bg:"blue.400"}} cursor="pointer" transition=".4s background" display={['flex', 'flex', 'flex', 'flex']} onClick={toggleColorMode} size={["sm", "sm", "md", "md"]}>
            {colorMode === 'light' ? <SunIcon fontSize={"20px"} color={'white'}/> : <MoonIcon fontSize={"20px"} color='white'/>}
          </IconButton>
        </Flex>
      </Flex>
    </Box>

    <MenuMobile />
    </>
  )
}
