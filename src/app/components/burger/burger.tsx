import { FC } from "react"
import { Menu, MenuList, MenuItem, MenuButton, Link, IconButton, useColorModeValue } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

interface Props {
  links: { name: string, path: string }[]
}

export const Burger: FC<Props> = ({ links }) => {
  return (
    <Menu>
      <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="options"></MenuButton>
      <MenuList>
        {links.map(link => {
          return (
            <MenuItem key={link.name} as={Link} href={`#${link.path}`} color={useColorModeValue('teal', '#ff63c3')}>
              {link.name}
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}
