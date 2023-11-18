import { Container, Box, Heading, Text } from "@chakra-ui/react"
import { ThingsILove } from "../../components/things-i-love/things-i-love"
import { Section } from "../../components/section/section"
import { Bio } from "../../components/bio/bio"
import { WaysToReachMe } from "../../components/ways-to-reach-me/ways-to-reach-me"
import { FC } from 'react'
import { thingsThatILove } from "../../constants/thingThatILove"
import { contacts } from "../../constants/contacts"

export const Home: FC = () => {
  return (
    <Container>
      <Box borderRadius="lg" mb={6} p={3} textAlign="center" >
        <Heading mt={100} mb={5} variant="page-title" as="h2">Hello, i'm Victor Yenokh</Heading>
        <Text>Software engineer</Text>
      </Box>
      <Section delay="0.1">
        <Heading as="h3" variant='section-title'>Bio</Heading>
        <Bio />
      </Section>
      <Section delay="0.2">
        <Heading as="h3" variant='section-title'>I love</Heading>
        <ThingsILove things={thingsThatILove} />
      </Section>
      <Section delay="0.3">
        <Heading as='h3' variant='section-title'>Ways To Reach Me</Heading>
        <WaysToReachMe contacts={contacts}></WaysToReachMe>
      </Section>
    </Container>
  )
}
