import { Box, Text } from '@chakra-ui/react'
import React, { ComponentProps, ReactNode } from 'react'

interface TitleSectionsProps extends ComponentProps<typeof Box> {
  children: ReactNode
}

export const TitleSections = ({children, ...rest}: TitleSectionsProps) => {
  return (
    <Box borderBottom={"4px solid #4299E1"} w="fit-content" margin="0 auto" borderRadius={"8px"} {...rest}>
      <Text as="h1" textAlign={"center"} fontSize="2rem" textTransform={"uppercase"} letterSpacing="3px">{children}</Text>
    </Box>
  )
}
