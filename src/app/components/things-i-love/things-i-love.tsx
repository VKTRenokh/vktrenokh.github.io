import { List, ListIcon, ListItem } from "@chakra-ui/react"
import { IoHeartOutline } from "react-icons/io5";
import { FC } from "react"

interface Props {
  things: string[]
}

export const ThingsILove: FC<Props> = ({ things }) => {
  return (
    <List spacing={3}>
      {things.map(thing => {
        return (
          <ListItem >
            <ListIcon color={'grassTeal'} as={IoHeartOutline}></ListIcon>
            {thing}
          </ListItem>
        )
      })}
    </List>
  )
}
