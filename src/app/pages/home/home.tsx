import { Container, Box, Heading, Text, Link, useColorModeValue } from "@chakra-ui/react"
import { ThingsILove } from "../../components/things-i-love/things-i-love"
import { Section } from "../../components/section/section"
import { TextImportant } from "../../components/text-important/text-important"
import * as React from "react"
import { thingsThatILove } from "../../constants/thingThatILove"

export const Home: React.FC = () => {
  return (
    <Container>
      <Box borderRadius="lg" mb={6} p={3} textAlign="center" bg={useColorModeValue("tealAlpha.500", "whiteAlpha.200")}>
        <Heading mt={100} mb={5} variant="page-title" as="h2">Hello, i'm Victor Yenokh</Heading>
        <Text>Software engineer</Text>
      </Box>
      <Section delay="0.1">
        <Heading as="h3" variant='section-title'>Bio</Heading>
        <Text>
          <TextImportant>2010</TextImportant>
          Born in Sevastopol, Crimea
        </Text>
        <Text>
          <TextImportant>2022</TextImportant>
          Started rsschool courses
        </Text>
        <Text>
          <TextImportant>2023</TextImportant>
          Finished rsschool courses
        </Text>
      </Section>
      <Section delay="0.2">
        <Heading as="h3" variant='section-title'>I love</Heading>
        <ThingsILove things={thingsThatILove}></ThingsILove>
      </Section>
    </Container>
  )
}
