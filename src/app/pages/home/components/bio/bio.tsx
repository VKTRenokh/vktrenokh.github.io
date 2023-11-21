import { TextImportant } from "@/app/components/text-important/text-important"
import { Text, Link } from "@chakra-ui/react"
import { FC, useState } from "react"

export const Bio: FC = () => {
  const [birthDate, setBirthDate] = useState<'2010' | '23 June 2010'>('2010')

  const handleBirthClick = () => {
    setBirthDate(birthDate === '2010' ? '23 June 2010' : '2010')
  }

  return (
    <>
      <Text>
        <TextImportant style={{ cursor: 'pointer' }} onClick={handleBirthClick}>{birthDate}</TextImportant>
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
