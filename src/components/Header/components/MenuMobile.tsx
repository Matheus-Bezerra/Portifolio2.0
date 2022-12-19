import React from 'react'
import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import { NavLink } from './NavLink'
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineMessage } from 'react-icons/ai'

export const MenuMobile = () => {
  const bg = useColorModeValue('gray.900', 'white')
  const color = useColorModeValue('white', 'black')

  return (
    <Box position={"fixed"} bg={bg} w="100%" bottom="0" display={["block", "block", "none", "none"]}>
      <Flex justifyContent={"space-between"} align="center" h="50px" px="2rem" m="0 auto" as="nav" gap="1.5rem">
        <NavLink path="/" alt="Página de apresentação do Matheus Bezerra"> <AiOutlineHome fontSize="28px" color={color}/> </NavLink>
        <NavLink path="/" alt="Página de apresentação do Matheus Bezerra"> <AiOutlineUser fontSize="28px" color={color}/> </NavLink>
        <NavLink path="/" alt="Página de apresentação do Matheus Bezerra"> <AiOutlineProject fontSize="28px" color={color}/> </NavLink>
        <NavLink path="/" alt="Página de apresentação do Matheus Bezerra"> <AiOutlineMessage fontSize="28px" color={color}/> </NavLink>
      </Flex>
    </Box>
  )
}
