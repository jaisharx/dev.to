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

const IconButton = styled(Button)`
    padding: 0.4rem;
    width: auto;
    height: auto;
    border-radius: 100%;
    background: transparent;

    &:hover {
        background-color: #f6f6f6;
    }
`;

export default function Navbar() {
    return (
        <Box py="2" boxShadow="md" borderBottom="1px solid #b5bdc4">
            <Container>
                <HStack spacing={4}>
                    <Image src="/assets/logo.svg" />
                    <Input
                        maxW="26rem"
                        placeholder="Search..."
                        borderColor="#b5bdc4"
                        borderRadius="5px"
                    />
                    <Spacer />
                    <HStack spacing={3}>
                        <DevButton>Write a post</DevButton>
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
    );
}
