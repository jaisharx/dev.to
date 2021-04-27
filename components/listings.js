import { Box, Flex, Link, Heading, Text, Spacer } from '@chakra-ui/react';

function List() {
    return (
        <Box
            as="section"
            bg="white"
            py="3"
            borderRadius="md"
            border="1px solid #E2E4E6"
        >
            <Flex align="center">
                <Heading fontSize="1.25rem">Listings</Heading>
                <Spacer />
                <Link fontSize="14px" color="#3b49df" fontWeight="medium">
                    See all
                </Link>
            </Flex>
            <Box>
                <Box py="4" borderTop="1px solid #E2E4E6">
                    <Text>
                        Javascript developer (~ 2 YOE) looking for remote work
                    </Text>
                    <Text mt="2">forhire</Text>
                </Box>
            </Box>
        </Box>
    );
}

export default function Listing() {
    return (
        <Box as="aside">
            <List />
        </Box>
    );
}
