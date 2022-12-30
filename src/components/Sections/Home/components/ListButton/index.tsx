import { Flex, Button } from '@chakra-ui/react'
import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export const ListButton = () => {
  return (
    <Flex mt=".4rem" gap="1rem" flexWrap={"wrap"}>
        <Button colorScheme={"blue"} as="a" href='https://drive.google.com/file/d/16cCVrHPggukcS-IDt4CBU6_8BoBgKlay/view?usp=share_link' target={"_blank"}>Baixar CV</Button>
        <Button colorScheme='linkedin' leftIcon={<FaLinkedin />} as="a" href="https://www.linkedin.com/in/matheus-bezerra04/" target="_blank">
          Linkedin
        </Button>
        <Button colorScheme={"orange"} leftIcon={<SiGmail />} as="a" href="mailto:matheusbwzerra002@gmail.com">
          Gmail
        </Button>
        <Button colorScheme='purple' leftIcon={<FaGithub />} as="a" target="_blank" href="https://github.com/Matheus-Bezerra">Github</Button>
      </Flex>
  )
}
