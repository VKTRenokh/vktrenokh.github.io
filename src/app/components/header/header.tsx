import { Box, Container } from "@chakra-ui/react"
import { FC } from "react";

interface Props {
  links: string[]
}

export const Header: FC = (props: Props) => {
  return (
    <Box position={"fixed"}>
      <Container display="flex" p={2} maxW={"container.md"} flexWrap="wrap" alignItems="center" justifyContent={"space-between"}>

      </Container>
    </Box>
  )
}
