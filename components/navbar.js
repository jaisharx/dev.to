import { Box, Button, HStack, Image, Input, Spacer } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Container from './container';

const DevButton = styled(Button)`
    color: white;
    border-radius: 4px;
    background-color: #3b49df;

    &:hover {
        background-color: #323ebe;
    }
`;

export default function Navbar() {
    return (
        <Box py="2" boxShadow="md" borderBottom="1px solid #b5bdc4">
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
                    <HStack spacing={6}>
                        <DevButton>Write a post</DevButton>
                        <Image src="/assets/notification.svg" />
                        <Image src="/assets/bell.svg" />
                        <Image
                            w="8"
                            src="/assets/profile.jpeg"
                            borderRadius="full"
                            border="2px solid #eef0f1"
                        />
                    </HStack>
                </HStack>
            </Container>
        </Box>
    );
}
