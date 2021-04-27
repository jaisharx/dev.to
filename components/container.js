import { Box } from '@chakra-ui/layout';

export default function Container({ children }) {
    return <Box maxW="1280px" px={4} mx="auto">{children}</Box>;
}
