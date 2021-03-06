import MainLayout from "app/layouts/MainLayout"
import { Link as BlitzLink } from "blitz"
import {
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  Link,
  Stack,
} from "@chakra-ui/core"
import TextInput from "app/components/TextInput"
import { Form, Formik } from "formik"
import React from "react"
import { useRouter, BlitzPage } from "blitz"
import register from "app/modules/auth/mutations/register"
import { RegisterInput, RegisterInputType } from "app/modules/auth/validations"

const RegisterPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <Stack spacing={5} paddingX={3} flexDirection="column" align="center" justify="center" flex={1}>
      <Heading textAlign="center">Create an Account</Heading>

      <Formik<RegisterInputType>
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values, { setFieldError, setStatus }) => {
          try {
            await register(values)
            await router.push("/")
          } catch (error) {
            if (error.code === "P2002" && error.meta?.target?.includes("email")) {
              // This error comes from Prisma
              setFieldError("email", "This email is already being used")
            } else {
              setStatus(error.toString())
            }
          }
        }}
        validate={(values) => {
          try {
            RegisterInput.parse(values)
          } catch (error) {
            return error.formErrors.fieldErrors
          }
        }}
      >
        {({ isSubmitting, status }) => (
          <Stack maxW="md" as={Form} width="full" shouldWrapChildren spacing={3}>
            <TextInput name="email" label="Email" />
            <TextInput name="password" label="Password" type="password" />

            <Button variantColor="teal" width="full" type="submit" isLoading={isSubmitting}>
              Register
            </Button>

            <FormControl isInvalid={!!status}>
              <FormErrorMessage>{status}</FormErrorMessage>
            </FormControl>
          </Stack>
        )}
      </Formik>

      <BlitzLink href="/login">
        <Link mt={3}>Already have an account? Log in</Link>
      </BlitzLink>
    </Stack>
  )
}

RegisterPage.getLayout = (page) => <MainLayout title="Register">{page}</MainLayout>

export default RegisterPage
