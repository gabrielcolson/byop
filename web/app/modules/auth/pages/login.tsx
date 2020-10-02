import { Link as BlitzLink } from "@blitzjs/core"
import {
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  Link,
  Stack,
} from "@chakra-ui/core"
import TextInput from "app/components/TextInput"
import MainLayout from "app/layouts/MainLayout"
import { Form, Formik } from "formik"
import React from "react"
import { useRouter, BlitzPage } from "blitz"
import login from "app/modules/auth/mutations/login"
import { LoginInput } from "app/modules/auth/validations"

const LoginPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <Stack spacing={5} paddingX={3} flexDirection="column" align="center" justify="center" flex={1}>
      <Heading textAlign="center">Welcome back</Heading>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values, { setStatus }) => {
          try {
            await login(values)
            await router.push("/")
          } catch (error) {
            if (error.name === "AuthenticationError") {
              setStatus("Invalid credentials")
            } else {
              setStatus(error.toString())
            }
          }
        }}
        validate={(values) => {
          try {
            LoginInput.parse(values)
          } catch (error) {
            return error.formErrors.fieldErrors
          }
        }}
      >
        {({ isSubmitting, status }) => (
          <Stack maxW="md" as={Form} width="full" shouldWrapChildren spacing={3}>
            <TextInput name="email" label="Email" />

            <TextInput name="password" label="Password" type="password" />

            <Button
              variantColor="teal"
              color="white"
              width="full"
              type="submit"
              isLoading={isSubmitting}
            >
              Log in
            </Button>

            <FormControl isInvalid={!!status}>
              <FormErrorMessage>{status}</FormErrorMessage>
            </FormControl>
          </Stack>
        )}
      </Formik>

      <BlitzLink href="/register">
        <Link>No account yet? Register</Link>
      </BlitzLink>
    </Stack>
  )
}

LoginPage.getLayout = (page) => <MainLayout title="Log in">{page}</MainLayout>

export default LoginPage
