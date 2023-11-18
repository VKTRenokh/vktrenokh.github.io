import { IconType } from "react-icons";
import { FaDiscord, FaGithub, FaTelegram } from "react-icons/fa";
import { discordLink, githubLink, telegramLink } from "./links";

export interface Contact {
  icon: IconType;
  name: string;
  link: string;
}

export const contacts: Contact[] = [
  {
    icon: FaTelegram,
    name: "Telegram",
    link: telegramLink,
  },
  {
    icon: FaDiscord,
    name: "Discord",
    link: discordLink,
  },
  {
    icon: FaGithub,
    name: "Github",
    link: githubLink,
  },
];
