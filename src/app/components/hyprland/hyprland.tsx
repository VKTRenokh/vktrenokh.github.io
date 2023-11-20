import { Heading } from "@chakra-ui/react"
import { ConfigImage } from "../config-image/config-image/config-image"
import { Section } from "../section/section"
import { FC } from "react"
import hyprland from "@/assets/hyprland.png"
import hyprlandSecond from "@/assets/hyprland-1.png"
import hyprlandThird from "@/assets/hyprland-2.png"

export const Hyprland: FC = () => {
  return (
    <Section delay="0.1">
      <Heading as="h3" variant="section-title">Hyprland</Heading>
      <ConfigImage src={hyprland} />
      <ConfigImage src={hyprlandThird} />
      <ConfigImage src={hyprlandSecond} />
    </Section>
  )
}
