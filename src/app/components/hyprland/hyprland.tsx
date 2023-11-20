import { Heading, Image } from "@chakra-ui/react"
import { Section } from "../section/section"
import { FC } from "react"
import hyprland from "@/assets/hyprland.png"
import hyprlandSecond from "@/assets/hyprland-1.png"
import hyprlandThird from "@/assets/hyprland-2.png"

export const Hyprland: FC = () => {
  return (
    <Section delay="0.1">
      <Heading as="h3" variant="section-title">Hyprland</Heading>
      <Image loading="lazy" src={hyprland} borderRadius="md" mb={5}></Image>
      <Image loading="lazy" src={hyprlandThird} borderRadius="md" mb={5}></Image>
      <Image loading="lazy" src={hyprlandSecond} borderRadius="md"></Image>
    </Section>
  )
}
