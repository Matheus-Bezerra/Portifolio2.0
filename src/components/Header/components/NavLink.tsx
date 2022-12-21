import React, { ComponentProps, ReactNode } from 'react'
import { List } from '@chakra-ui/react'
import {Link as ChakraLink} from '@chakra-ui/react'

interface NavLinkProps extends ComponentProps<typeof ChakraLink>{
  children: ReactNode
  path: string
  alt: string
}

export const NavLink = ({children, path, alt, ...rest}: NavLinkProps) => {
  return (
    <List as="li" border={"2px solid transparent"} _hover={{borderBottomColor:'blue.400'}} pb="2px" transition={".6s all"}>
      <ChakraLink  href={path} about={alt} p="6px" _hover={{textDecoration: 'none'}} {...rest}>
        {children}
      </ChakraLink>
    </List>
  )
}
