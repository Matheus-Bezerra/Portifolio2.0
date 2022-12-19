import React from 'react'
import { Box, Text } from '@chakra-ui/react'

export const Logo = () => {
  return (
    <Box p={"8px"} borderRadius="100%" bg="blue.400" border="4px solid blue.600">
      <Text fontSize={[".8rem", ".7rem", "1.1rem", "1.1rem"]} color="white">MB</Text>
    </Box>
  )
}
