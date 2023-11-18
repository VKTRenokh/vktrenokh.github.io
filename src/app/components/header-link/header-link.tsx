import { Link } from "@chakra-ui/react"
import { FC, ReactNode } from "react"

interface Props {
  href: string,
  target: string
  children: ReactNode
}

export const HeaderLink: FC<Props> = ({ href, children, target }: Props) => {
  return (<Link href={href} p={2} color="teal" target={target}>
    {children}
  </Link>)
}
