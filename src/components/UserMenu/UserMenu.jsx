import { Box } from "components/Box/Box"
import { Button, Email } from "./UserMenu.styled"

export const UserMenu = ({email}) => {
  return (
    <Box
    display="flex"
    // flexDirection="column"
    alignItems="space-between"
    mx="auto"
    my={4}
    px={2}
    py={4}
    bg="list"
    borderRadius="20px"
  >
    <Email>anna.bazdyreva@gmail.com</Email>
    <Button>Logout</Button>
    </Box>
  )
}
