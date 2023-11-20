import { Heading } from "@chakra-ui/react"
import { ConfigImage } from "../config-image/config-image/config-image"
import { Section } from "../section/section"
import { FC } from "react"
import hyprland from "@/assets/hyprland.webp"
import hyprlandSecond from "@/assets/hyprland-1.webp"
import hyprlandThird from "@/assets/hyprland-2.webp"

export const Hyprland: FC = () => {
  return (
    <Section delay="0.1">
      <Heading as="h3" variant="section-title">Hyprland</Heading>
      <ConfigImage width="544" height="306" src={hyprland} />
      <ConfigImage width="544" height="306" src={hyprlandThird} />
      <ConfigImage width="544" height="306" src={hyprlandSecond} />
    </Section>
  )
}
