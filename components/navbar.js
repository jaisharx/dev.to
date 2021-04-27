import { Box, Button, HStack, Image, Input, Spacer } from '@chakra-ui/react';
import Container from './container';

export default function Navbar() {
    return (
        <Box py="2" boxShadow="md">
            <Container>
                <HStack spacing={5}>
                    <Image src="/assets/logo.svg" />
                    <Input
                        maxW="26rem"
                        placeholder="Search..."
                        borderColor="#b5bdc4"
                        borderRadius="5px"
                    />
                    <Spacer />
                    <Button colorScheme="blue">Write a post</Button>
                    <Image src="/assets/notification.svg" />
                    <Image src="/assets/bell.svg" />
                    <Image
                        w="8"
                        src="/assets/profile.jpeg"
                        borderRadius="full"
                        border="2px solid #eef0f1"
                    />
                </HStack>
            </Container>
        </Box>
    );
}
