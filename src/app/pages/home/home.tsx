import { Container, Box, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import * as React from "react"

export const Home: React.FC = () => {
  return (
    <Container>
      <Box borderRadius="lg" mb={6} p={3} textAlign="center" bg={useColorModeValue("tealAlpha.500", "whiteAlpha.200")}>
        <Heading variant="page-title" as="h2">Hello, i'm Victor Yenokh</Heading>
      </Box>
      <Text textAlign="center">text text</Text>
    </Container>
  )
}
