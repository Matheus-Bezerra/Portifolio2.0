import { Grid, Text } from '@chakra-ui/react'
import React, {ComponentProps} from 'react'

interface TextStackProps extends ComponentProps<typeof Text>{}

export const TextStack = ({...rest}: TextStackProps) => {
  return (
    <Grid gap=".2rem">
      <Text {...rest}>Desenvolvedor Front-end</Text>
      <Text {...rest}>Web | Mobile</Text>
    </Grid>
  )
}
