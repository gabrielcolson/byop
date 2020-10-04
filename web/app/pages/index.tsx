import { BlitzPage, useQuery } from "@blitzjs/core"
import MainLayout from "../layouts/MainLayout"
import getTasks from "../modules/tasks/queries/getTasks"
import { Suspense } from "react"
import TitleSectionContainer from "../components/TitleSectionContainer"
import SectionContainer from "../components/SectionContainer"
import { Heading, Button, useDisclosure, Text, Stack, Divider, Flex } from "@chakra-ui/core"
import NewTaskModal from "../modules/tasks/components/NewTaskModal"

const TaskList = () => {
  const [tasks] = useQuery(getTasks, null, { refetchInterval: 1000 })
  return (
    <Stack w="full" spacing="50px">
      {tasks.map((task) => [
        (<Stack spacing="20px" w="full" height="50px">
          <Flex justify="space-between">
            <Heading as="h4" size="md">{task.imageURL}</Heading>
            <Button as="a" href={task.worker?.ip} isDisabled={!task.worker}>Open app</Button>
          </Flex>
          <Text>Started on {task.createdAt.toLocaleString()}</Text>
        </Stack>),
        (<Divider />)
      ])}
    </Stack>
  )
}

const HomePage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <>
      <TitleSectionContainer justify="space-between">
        <Heading>Build Your Own PaaS</Heading>
        <Button variantColor="teal" onClick={onOpen}>Create Task</Button>
      </TitleSectionContainer>
      <SectionContainer mt="48px">
        <Suspense fallback="loading...">
          <TaskList />
        </Suspense>
      </SectionContainer>
      <NewTaskModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

HomePage.getLayout = (page: BlitzPage) => (<MainLayout>{page}</MainLayout>)

export default HomePage