import { FC } from "react"
import { Heading } from "@chakra-ui/react"
import { ConfigImage } from "../config-image/config-image/config-image"
import sway from "@/assets/sway.webp"
import swaySecond from "@/assets/sway-1.webp"
import { Section } from "@/app/components/section/section"

export const Sway: FC = () => {
  return (
    <Section delay="0.2">
      <Heading as="h3" variant="section-title">Sway</Heading>
      <ConfigImage width="544" height="306" src={sway} />
      <ConfigImage width="544" height="306" src={swaySecond} />
    </Section>
  )
}
