import { FC } from "react"
import { ListItem, ListIcon, Link } from "@chakra-ui/react"
import { IconType } from "react-icons"

interface Props {
  icon: IconType,
  url: string,
  name: string
}

export const ContactLink: FC<Props> = ({ icon, url, name }) => {
  return (
    <ListItem>
      <ListIcon as={icon}></ListIcon>
      <Link href={url}>{name}</Link>
    </ListItem>
  )
}
