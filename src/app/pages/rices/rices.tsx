import { Container, Box, Heading, Text, Link } from "@chakra-ui/react"
import { FC } from "react"
import { Hyprland } from "./components/hyprland/hyprland"
import { Sway } from "./components/sway/sway"

export const Component: FC = () => {
  return (
    <Container>
      <Box mb={6} p={3} textAlign="center">
        <Heading mt={100} mb={5} variant="page-title" as="h2">Rices</Heading>
        <Text>
          Dotfiles <Link href="https://github.com/vktrenokh/dotfiles">here</Link>
        </Text>
      </Box>
      <Hyprland></Hyprland>
      <Sway></Sway>
    </Container>
  )
}
