import { Box } from '@chakra-ui/layout';

export default function Container(props) {
    return (
        <Box maxW="1280px" px={4} mx="auto" {...props}>
            {props.children}
        </Box>
    );
}
