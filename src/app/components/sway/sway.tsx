import { FC } from "react"
import { Section } from "../section/section"
import { Heading } from "@chakra-ui/react"
import { ConfigImage } from "../config-image/config-image/config-image"
import sway from "@/assets/sway.png"
import swaySecond from "@/assets/sway-1.png"

export const Sway: FC = () => {
  return (
    <Section delay="0.2">
      <Heading as="h3" variant="section-title">Sway</Heading>
      <ConfigImage src={sway} />
      <ConfigImage src={swaySecond} />
    </Section>
  )
}
