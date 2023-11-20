import { Container, Box, Heading, Text, Link } from "@chakra-ui/react"
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
      <Box mb={6} p={3} textAlign="center" >
        <Heading mt={100} mb={5} variant="page-title" as="h2">Hello, i'm Victor Yenokh</Heading>
        <Text>Software engineer, Keyboard enthusiast</Text>
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
        <Heading as="h3" variant='section-title'>About me</Heading>
        <Text>
          Passionate about crafting web applications with precision using <Link href="https://www.typescriptlang.org/">TypeScript</Link>, <Link href="https://vuejs.org">Vue</Link>, <Link href="https://angular.dev">Angular</Link>, <Link href="https://chakra-ui.com/">Chakra ui</Link> and <Link href="https://taiga-ui.dev/">taiga ui</Link>. i love editing in <Link href="https://neovim.io/">neovim</Link>. Currently living in Cyprus and enjoying its landscapes, i love going to hike, i want to build keyboards but have no money. i love orange cats. I use endeavour os linux with hyprland <span title="Window Manager">WM</span>
        </Text>
      </Section>
      <Section delay="0.4">
        <Heading as='h3' variant='section-title'>Ways To Reach Me</Heading>
        <WaysToReachMe contacts={contacts}></WaysToReachMe>
      </Section>
    </Container>
  )
}
