import TextInput from "app/components/TextInput"
import { CreateTaskInput, CreateTaskInputType } from "app/modules/tasks/validations"
import { useRouter } from "blitz"
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/core"
import { Form, Formik } from "formik"
import createTask from "app/modules/tasks/mutations/createTask"

export interface NewTaskModalProps {
  isOpen: boolean
  onClose: () => void
}

const NewTaskModal = ({ isOpen, onClose }: NewTaskModalProps): JSX.Element => {
  const router = useRouter()

  return (
    <Modal isOpen={isOpen} onClose={onClose} {...{ style: { paddingRight: 10, paddingLeft: 10 } }}>
      <ModalOverlay />

      <Formik<CreateTaskInputType>
        initialValues={{ imageURL: "" }}
        onSubmit={async (values, { setStatus }) => {
          try {
            const task = await createTask(values)
            await router.push(`/tasks/${task.id}`)
            onClose()
          } catch (error) {
            setStatus(error.toString())
          }
        }}
        validate={(values) => {
          try {
            CreateTaskInput.parse(values)
          } catch (error) {
            return error.formErrors.fieldErrors
          }
        }}
      >
        {({ isSubmitting }) => (
          <ModalContent
            mx={{ base: 5, xs: "auto" }}
            w="calc(100% - 2 * 20px)"
            as={Form}
            {...{ noValidate: true }}
            rounded="md"
          >
            <ModalHeader>Create a new Task</ModalHeader>

            <ModalCloseButton />

            <ModalBody>
              <TextInput
                name="imageURL"
                label="Image URL"
                isRequired
                placeholder="docker.io/vad1mo/hello-world-res"
              />
            </ModalBody>

            <ModalFooter>
              <Button isLoading={isSubmitting} variantColor="teal" mr={3} type="submit">
                Create Space
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        )}
      </Formik>
    </Modal>
  )
}

export default NewTaskModal
