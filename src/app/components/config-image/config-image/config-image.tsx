import { Image } from "@chakra-ui/react"
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FC } from "react"

interface Props {
  src: string
  alt?: string
}

export const ConfigImage: FC<Props> = ({ src, alt }) => {
  return <Image src={src} alt={alt} borderRadius="md" mb={5} as={LazyLoadImage}></Image>
}
