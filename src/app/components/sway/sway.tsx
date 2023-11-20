import { FC } from "react"
import { Section } from "../section/section"
import { Heading, Image } from "@chakra-ui/react"
import sway from "@/assets/sway.png"
import swaySecond from "@/assets/sway-1.png"

export const Sway: FC = () => {
  return (
    <Section delay="0.2">
      <Heading as="h3" variant="section-title">Sway</Heading>
      <Image loading="lazy" src={sway} alt="sway image"></Image>
      <Image loading="lazy" src={swaySecond} alt="sway image"></Image>
    </Section>
  )
}
