import { Box, Container, Stack, useColorModeValue } from "@chakra-ui/react"
import { FC } from "react";
import { HeaderLink } from "../header-link/header-link";

const links = [{ name: 'home', path: '/' }, { name: "projects", path: '/projects' }]

export const Header: FC = () => {
  return (
    <Box position={"fixed"} as="header" w="100%" bg={useColorModeValue('#ffffff40', '#20202380')} css={{ backdropFilter: 'blur(10px)' }}>
      <Container display="flex" p={2} maxW={"container.md"} flexWrap="wrap" alignItems="center" justifyContent={"space-between"}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          {links.map(link => {
            return <HeaderLink href={`#${link.path}`} target="_self">{link.name}</HeaderLink>
          })}
        </Stack>
      </Container>
    </Box>
  )
}
