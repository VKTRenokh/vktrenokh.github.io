import { Text, Link } from "@chakra-ui/react"
import { TextImportant } from "../text-important/text-important"
import { FC } from "react"

export const Bio: FC = () => {
  return (
    <>
      <Text>
        <TextImportant>2010</TextImportant>
        Born in Sevastopol, Crimea
      </Text>
      <Text>
        <TextImportant>2022</TextImportant>
        Started <Link href="https://rs.school/">Rsschool</Link> courses
      </Text>
      <Text>
        <TextImportant>2023</TextImportant>
        Finished <Link href="https://rs.school/">Rsschool</Link> courses
      </Text>
    </>
  )
}
