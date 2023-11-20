import { FC, ReactNode, useState } from 'react'
import { Text, useColorModeValue } from '@chakra-ui/react'

interface Props {
  children: ReactNode
}

export const SeeMore: FC<Props> = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false)

  const handler = () => {
    setIsOpened(!isOpened)
  }

  return (
    <>
      {isOpened ? children : <Text cursor="pointer" onClick={handler} color={useColorModeValue('gray.500', '#ff63c3')}>See more</Text >}
    </>
  )
}
