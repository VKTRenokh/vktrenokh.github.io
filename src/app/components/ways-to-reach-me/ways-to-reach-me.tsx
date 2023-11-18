import { FC } from "react";
import { List } from "@chakra-ui/react";
import { Contact } from "../../constants/contacts";
import { ContactLink } from "../contact-link/contact-link";

interface Props {
  contacts: Contact[]
}

export const WaysToReachMe: FC<Props> = ({ contacts }) => {
  return (
    <List spacing={3}>
      {contacts.map(contact => <ContactLink key={contact.link} url={contact.link} name={contact.name} icon={contact.icon} />)}
    </List>
  )
}
