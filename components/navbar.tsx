import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import Container from './container'

const IconButton = styled(Button)`
  padding: 0.4rem;
  width: auto;
  height: auto;
  border-radius: 100%;
  background: transparent;

  &:hover {
    background-color: #f6f6f6;
  }
`

export default function Navbar() {
  return (
    <Box
      pos="fixed"
      top="0"
      left="0"
      right="0"
      py="2"
      bg="white"
      zIndex="docked"
      borderBottom="1px solid #b5bdc4"
    >
      <Container>
        <HStack spacing={4}>
          <Image src="/assets/logo.svg" />
          <InputGroup maxW="26rem">
            <InputRightElement children={<Image src="/assets/search.svg" />} />
            <Input
              placeholder="Search..."
              borderColor="#b5bdc4"
              borderRadius="5px"
            />
          </InputGroup>
          <Spacer />
          <HStack spacing={3}>
            <Button
              variant="outline"
              color="#3b49df"
              borderColor="#3b49df"
              _hover={{ bg: '#3b49df', color: 'white' }}
            >
              Create Post
            </Button>
            <IconButton>
              <Image src="/assets/notification.svg" />
            </IconButton>
            <IconButton>
              <Image src="/assets/bell.svg" />
            </IconButton>
            <Image
              w="10"
              src="/assets/profile.jpeg"
              borderRadius="full"
              border="2px solid #eef0f1"
            />
          </HStack>
        </HStack>
      </Container>
    </Box>
  )
}
