import { FC } from "react"
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { ToggleAnimation } from "../header-button/header-button"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

export const ThemeToggle: FC = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <ToggleAnimation>
      <IconButton aria-label="Toggle theme" colorScheme={useColorModeValue('purple', 'orange')} icon={useColorModeValue(<MoonIcon />, <SunIcon />)} onClick={toggleColorMode}></IconButton>
    </ToggleAnimation>
  )
}
