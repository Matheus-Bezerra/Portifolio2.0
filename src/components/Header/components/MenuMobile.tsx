import React from 'react'
import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import { NavLink } from './NavLink'
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineMessage } from 'react-icons/ai'

export const MenuMobile = () => {
  const bg = useColorModeValue('gray.900', 'white')
  const color = useColorModeValue('white', 'black')

  return (
    <Box position={"fixed"} bg={bg} w="100%" bottom="0" display={["block", "block", "none", "none"]} zIndex={1}>
      <Flex justifyContent={"space-between"} align="center" h="50px" px="2rem" m="0 auto" as="nav" gap="1.5rem">
        <NavLink as="a" path="#home" alt="Seção de apresentação do Matheus Bezerra"> <AiOutlineHome fontSize="28px" color={color}/> </NavLink>
        <NavLink as="a" path="#about" alt="Seção sobre o Matheus Bezerra"> <AiOutlineUser fontSize="28px" color={color}/> </NavLink>
        <NavLink as="a" path="#projects" alt="Seção de projetos do Matheus Bezerra"> <AiOutlineProject fontSize="28px" color={color}/> </NavLink>
        <NavLink as="a" path="#contact" alt="Meios de contatos do Matheus Bezerra"> <AiOutlineMessage fontSize="28px" color={color}/> </NavLink>
      </Flex>
    </Box>
  )
}
