import { FC } from "react"
import { Menu, MenuList, MenuItem, MenuButton, Link, IconButton } from "@chakra-ui/react"
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
            <MenuItem key={link.name}>
              <Link href={link.path}>{link.name}</Link>
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}
