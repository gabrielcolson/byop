import ButtonLink from "app/components/ButtonLink"
import SectionContainer from "app/components/SectionContainer"
import logout from "app/modules/auth/mutations/logout"
import getCurrentUser from "app/modules/users/queries/getCurrentUser"
import { Link, useQuery, useRouter, useSession } from "blitz"
import {
  Avatar,
  Box,
  ButtonGroup,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/core"
import { Suspense } from "react"
import React from "react"

const AvatarMenuButton = (): JSX.Element => {
  const session = useSession()
  const [user] = useQuery(getCurrentUser, null, {
    enabled: !!session.userId && !session.isLoading,
  })

  if (session.isLoading) {
    return <></>
  }

  if (!user) {
    return (
      <ButtonGroup spacing={3}>
        <ButtonLink
          color="white"
          href="/login"
          variant="outline"
          cursor="pointer"
          borderColor="whiteAlpha.500"
          _hover={{ borderColor: "white" }}
        >
          Log in
        </ButtonLink>

        <ButtonLink
          href="/register"
          cursor="pointer"
          bg="white"
          color="teal.500"
          borderWidth="1px"
          borderColor="white"
          _hover={{ bg: "teal.500", color: "white" }}
        >
          Register
        </ButtonLink>
      </ButtonGroup>
    )
  }

  return <Avatar as={MenuButton} size="sm" name={user.email} />
}

const Header = (): JSX.Element => {
  const router = useRouter()

  async function handleLogout(): Promise<void> {
    await logout()
    await router.push("/")
  }

  return (
    <SectionContainer color="white" bg="teal.500" align="center" py={3}>
      <Flex flex={1} height="40px" align="center">
        <Flex align="center">
          <Link href={"/"}>
            <Heading as="a" cursor="pointer" size="md">
              BYOP
            </Heading>
          </Link>
        </Flex>
      </Flex>

      <Suspense fallback={null}>
        <Menu>
          {({ onClose }) => (
            <Box color="black">
              <AvatarMenuButton />
              <MenuList placement="bottom-end" onClick={onClose}>
                <MenuItem isDisabled>Theme</MenuItem>

                <MenuDivider />

                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Box>
          )}
        </Menu>
      </Suspense>
    </SectionContainer>
  )
}

export default Header
