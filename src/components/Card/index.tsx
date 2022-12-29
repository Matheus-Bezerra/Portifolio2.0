import React, { ReactNode } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image as ChakraImage, Stack, Button, ButtonGroup, Divider, Heading, Text, useColorMode, useColorModeValue, Link, scaleFadeConfig } from '@chakra-ui/react'
import Image from 'next/image'

interface CardComponentProps {
  image: any
  heading: string
  description: string
  link: {url: string; textAlt: string}
  tecnologies: string[]
  children: ReactNode
}

export const CardComponent = ({image, heading, description, link, tecnologies, children}: CardComponentProps) => {
  const bgCard = useColorModeValue('gray.700', 'white')
  const color = useColorModeValue('white', 'black')
  const {url, textAlt} = link

  return (
    <Card maxW='sm' background={bgCard} color={color} h="600px">
      <CardBody>
        <Link as="a" href={url} about={textAlt} target="_blank">
        <ChakraImage as={Image}
          src={image}
          alt={textAlt}
          borderRadius='lg'
          cursor={"pointer"}
          transition={"all .4s ease-out"}
          _hover={{transform: "scale(1.125)"}}
          h="220px"
        />
        </Link>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{heading}</Heading>
      <Text>
        {description}
      </Text>
      <Text color='blue.600' fontSize="1.125rem" fontWeight={"bold"}>
        {tecnologies.map((tech) => (
          <>
            {tech} {" "}
          </>
        ))}
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
