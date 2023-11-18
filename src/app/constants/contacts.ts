import { IconType } from "react-icons";
import { FaDiscord, FaGithub, FaTelegram } from "react-icons/fa";

export interface Contact {
  icon: IconType;
  name: string;
  link: string;
}

export const contacts: Contact[] = [
  {
    icon: FaTelegram,
    name: "Telegram",
    link: "https://t.me/vktrenokh",
  },
  {
    icon: FaDiscord,
    name: "Discord",
    link: "https://discordapp.com/users/882968599877287996",
  },
  {
    icon: FaGithub,
    name: "Github",
    link: "https://github.com/vktrenokh",
  },
];
