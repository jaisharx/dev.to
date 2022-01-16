import { Box, HStack, Skeleton as ChakraSkeleton } from '@chakra-ui/react'

export default function Skeleton(props: { size: 'large' | 'small' }) {
  return (
    <Box
      p="5"
      mt="4"
      w="full"
      minH="12rem"
      bg="white"
      borderRadius="md"
      boxShadow="0 0 0 1px rgba(9, 9, 9, 0.1)"
    >
      {props.size === 'large' && <Box h="18rem" />}
      <HStack>
        <ChakraSkeleton h="8" w="8" borderRadius="full" endColor="gray.200" />
        <ChakraSkeleton h="4" w="10rem" borderRadius="md" endColor="gray.200" />
      </HStack>
      <Box mt="4" pl="10">
        <ChakraSkeleton h="6" w="24rem" borderRadius="md" endColor="gray.200" />
        <ChakraSkeleton
          h="4"
          mt="2"
          w="16rem"
          borderRadius="md"
          endColor="gray.200"
        />
      </Box>
    </Box>
  )
}
