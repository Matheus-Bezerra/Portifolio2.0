import React, { ReactNode } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Button, ButtonGroup, Divider, Heading, Text, useColorMode, useColorModeValue, Link, scaleFadeConfig } from '@chakra-ui/react'

interface CardComponentProps {
  image: any
  heading: string
  description: string
  link: {url: string; textAlt: string}
  children: ReactNode
}

export const CardComponent = ({image, heading, description, link, children}: CardComponentProps) => {
  const bgCard = useColorModeValue('gray.700', 'white')
  const color = useColorModeValue('white', 'black')
  const {url, textAlt} = link

  return (
    <Card maxW='sm' background={bgCard} color={color}>
      <CardBody>
        <Link as="a" href={url} about={textAlt} target="_blank">
        <Image
          src={image}
          alt={textAlt}
          borderRadius='lg'
          cursor={"pointer"}
          transition={"all .4s ease-out"}
          _hover={{transform: "scale(1.125)"}}
        />
        </Link>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{heading}</Heading>
      <Text>
        {description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    {children}
  </CardFooter>
</Card>
  )
}
