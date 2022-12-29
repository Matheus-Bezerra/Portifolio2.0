import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { TitleSections } from '../../TitleSections'

export const Contact = () => {
  return (
    <Flex as="section"  maxW="1440px" m={"0 auto"} px="2rem" gap="3rem" flexDir="column" id="contact" py="1.6rem">
      <TitleSections>Contato</TitleSections>
      <Text>Obrigado pelo seu interesse, quer entrar em contato comigo? a melhor maneira é por e-mail, caso queira criar uma conexão comigo ou fazer uma pergunta mais casual, me envie uma mensagem no Linkedin, farei o possível para entrar em contato com você</Text>

      <Flex justify={"center"} align="center" flexWrap={"wrap"} gap="2rem">
        <Button as="a" href="https://www.linkedin.com/in/matheus-bezerra04/" target="_blank" colorScheme='linkedin' leftIcon={<FaLinkedin />}>Linkedin</Button>
        <Button as="a" href="mailto:matheusbwzerra002@gmail.com" colorScheme={"orange"} leftIcon={<SiGmail />}>Gmail</Button>
      </Flex>
    </Flex>
  )
}
