import SectionContainer, { SectionContainerProps } from "app/components/SectionContainer"
import { useColorMode } from "@chakra-ui/core"

export type TitleSectionProps = SectionContainerProps

const TitleSectionContainer = (props: TitleSectionProps): JSX.Element => {
  const { colorMode } = useColorMode()
  return <SectionContainer {...props} bg={colorMode === "light" ? "teal.50" : "black.500"} py="48px" borderBottomWidth={1} />
}

export default TitleSectionContainer
