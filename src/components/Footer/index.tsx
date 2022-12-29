import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export const Footer = () => {
  const bgFooter = useColorModeValue('gray.900', 'white')
  return (
    <Box as="footer" w="100%" mt="2.5rem">
      <Flex justifyContent={"center"} align="center" h={"80px"} maxW="1440px" m={"0 auto"} as="section" gap="1.5rem" px="2rem">
        <Text as="h3" textAlign="center">Desenvolvido por <Text as="span" color="blue.400" fontWeight="bold" pb="70px">Matheus Bezerra</Text></Text>
      </Flex>
    </Box>
  )
}
