import { Flex, Button } from '@chakra-ui/react'
import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export const ListButton = () => {
  return (
    <Flex mt=".4rem" gap="1rem" flexWrap={"wrap"}>
        <Button colorScheme={"blue"}>Baixar CV</Button>
        <Button colorScheme='linkedin' leftIcon={<FaLinkedin />}>Linkedin</Button>
        <Button colorScheme={"orange"} leftIcon={<SiGmail />}>Gmail</Button>
        <Button colorScheme='purple' leftIcon={<FaGithub />}>Github</Button>
      </Flex>
  )
}
