import { Flex } from '@chakra-ui/react'
import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiReact, DiJqueryLogo, DiMysql } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiExpo } from 'react-icons/si'

export const ListIcon = () => {
  return (
    <Flex fontSize="26px" gap=".6rem" mb=".4rem" flexWrap={"wrap"}>
      <Flex align="center">
        <AiFillHtml5 color={"#CA5441"} />
      </Flex>
      <Flex align="center">
        <DiCss3 color="#4299E1" />
      </Flex>
        <Flex fontSize="20px" align="center">
          <SiJavascript color="#eada41"/>
        </Flex>
        <Flex marginLeft={".3rem"} fontSize="20px" align="center">
          <SiTypescript color="#4299E1" />
        </Flex>
        <Flex align="center">
          <DiReact  color="#4299E1" />
        </Flex>
        <Flex>
          <DiReact  color="#9F7AEA" />
        </Flex>
        <Flex marginLeft={".3rem"} fontSize="20px" align="center">
          <SiExpo />
        </Flex>
        <DiJqueryLogo color="#4299E1" />
        <Flex marginLeft={".3rem"} fontSize="20px" align="center">
          <FaNodeJs color="#48BB78" /> 
        </Flex>
        <DiMysql color="#eada41" />
      </Flex>
  )
}
