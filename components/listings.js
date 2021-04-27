import { Box, Flex, Link, Heading, Text, Spacer } from '@chakra-ui/react';

function List() {
    return (
        <Box as="section" bg="white" borderRadius="md">
            <Box border="1px solid #E2E4E6">
                <Flex align="center" p="3">
                    <Heading fontSize="1.25rem">Listings</Heading>
                    <Spacer />
                    <Link fontSize="14px" color="#3b49df" fontWeight="medium">
                        See all
                    </Link>
                </Flex>
            </Box>
            <Box borderBottom="1px solid #E2E4E6">
                <Box p="3">
                    <Text>
                        Javascript developer (~ 2 YOE) looking for remote work
                    </Text>
                    <Text mt="2" color="#4d5760" fontSize="14px">
                        forhire
                    </Text>
                </Box>
            </Box>
            <Box borderBottom="1px solid #E2E4E6">
                <Box p="3">
                    <Text>
                        Building Progressive Web Apps - Hands-on Workshop - 4/29
                        1pm ET (GMT -4)
                    </Text>
                    <Text mt="2" color="#4d5760" fontSize="14px">
                        events
                    </Text>
                </Box>
            </Box>
            <Box borderBottom="1px solid #E2E4E6">
                <Box p="3">
                    <Text>
                        Want to know how a JavaScript framework works under the
                        hood?
                    </Text>
                    <Text mt="2" color="#4d5760" fontSize="14px">
                        education
                    </Text>
                </Box>
            </Box>
            <Box borderBottom="1px solid #E2E4E6">
                <Box p="3">
                    <Text>Pair Programming with Jhey</Text>
                    <Text mt="2" color="#4d5760" fontSize="14px">
                        events
                    </Text>
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
