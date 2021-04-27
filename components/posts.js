import {
    Box,
    Heading,
    Spacer,
    Button,
    VStack,
    HStack,
    Grid,
    Text,
    Link,
    Image,
} from '@chakra-ui/react';
import NextImage from 'next/image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const HeaderBtn = styled(Button)`
    position: relative;
    padding: 0.4rem 0.5rem;
    font-weight: normal;

    &:hover {
        color: #3b49df;

        &::after {
            width: 100%;
        }
    }

    ${(props) =>
        props.isCurrent &&
        css`
            font-weight: 500;

            &::after {
                transition: width 0.2s ease;
                position: absolute;
                bottom: 0;
                margin: auto;
                content: '';
                height: 3px;
                width: 70%;
                border-radius: 4px;
                background-color: #3b49df;
            }
        `}
`;

const CardBtn = styled(Button)`
    background-color: transparent;
    padding: 6px 8px;
    height: auto;
    font-weight: normal;
    font-size: 14px;
    line-height: 1.2;
    border-radius: 4px;

    &:hover {
        background-color: #f6f6f6;
    }
`;

const SaveBtn = styled(Button)`
    background-color: #d2d6db;
    padding: 8px 12px;
    height: auto;
    font-weight: normal;
    font-size: 14px;

    &:hover {
        background-color: #b5bdc4;
    }
`;

function Header() {
    return (
        <Box as="header">
            <HStack spacing=".6rem">
                <Heading fontSize="1.25rem">Posts</Heading>
                <Spacer />
                <HeaderBtn isCurrent>Feed</HeaderBtn>
                <HeaderBtn>Week</HeaderBtn>
                <HeaderBtn>Month</HeaderBtn>
                <HeaderBtn>Year</HeaderBtn>
                <HeaderBtn>Infinity</HeaderBtn>
                <HeaderBtn>Latest</HeaderBtn>
            </HStack>
        </Box>
    );
}

function Card({ isFirst }) {
    return (
        <Box
            mt="3"
            as="article"
            bg="white"
            borderRadius="md"
            overflow="hidden"
            border="1px solid #08090a1a"
        >
            {isFirst ? (
                <NextImage
                    src="/assets/header.jpeg"
                    width="1000"
                    height="420"
                />
            ) : (
                ''
            )}
            <Grid templateColumns="min-content 1fr" gap={2} p={4}>
                <Box w="32px" h="32px" bg="teal.200" borderRadius="full"></Box>
                <Box>
                    <VStack align="flex-start" spacing={0}>
                        <Text color="#4d5760" fontSize="14px" fontWeight="500">
                            Gedalya Krycer
                        </Text>
                        <Text color="#4d5760" fontSize="12px">
                            Apr 26 (16 hours ago)
                        </Text>
                    </VStack>
                    <Heading fontSize="24px" mt="3">
                        <Link>
                            165+ Developer Resources I Discovered in 2020-2021
                        </Link>
                    </Heading>
                    <HStack mt="3" fontSize="14px" color="#64707d">
                        <Text as={Link}>#javascript</Text>
                        <Text as={Link}>#beginners</Text>
                        <Text as={Link}>#webdev</Text>
                        <Text as={Link}>#productivity</Text>
                    </HStack>
                    <HStack mt={3}>
                        <CardBtn
                            leftIcon={<Image src="/assets/like.svg" />}
                            ml={-2}
                        >
                            155 reactions
                        </CardBtn>
                        <CardBtn leftIcon={<Image src="/assets/comment.svg" />}>
                            11 comments
                        </CardBtn>
                        <Spacer />
                        <Text fontSize="12px">18 min read</Text>
                        <SaveBtn>Save</SaveBtn>
                    </HStack>
                </Box>
            </Grid>
        </Box>
    );
}

export default function Posts() {
    return (
        <Box mb="8" borderRadius="md">
            <Header />
            <Card isFirst />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Box>
    );
}
