import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Text,
    Spacer,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

const LinkButton = styled(Button)`
    background: transparent;
    width: 14rem;
    padding: 8px;
    font-weight: normal;
    justify-content: flex-start;

    &:hover {
        color: #323ebe;
        background-color: #e2e4e6;
    }
`;

function Links() {
    return (
        <Box as="nav">
            <LinkButton>
                <Image src="/assets/sidebar/home.svg" mr="3" />
                Home
            </LinkButton>
            <LinkButton>
                <Image src="/assets/sidebar/reading.svg" mr="3" />
                Reading List
            </LinkButton>
            <LinkButton>
                <Image src="/assets/sidebar/listing.svg" mr="3" />
                Listings
            </LinkButton>
            <LinkButton>
                <Image src="/assets/sidebar/podcast.svg" mr="3" />
                Podcasts
            </LinkButton>
            <LinkButton>
                <Image src="/assets/sidebar/video.svg" mr="3" />
                Videos
            </LinkButton>
            <LinkButton>
                <Image src="/assets/sidebar/tag.svg" mr="3" />
                Tags
            </LinkButton>
            <LinkButton>
                <Text fontWeight="normal" color="#4d5760" ml="2.3rem">
                    More...
                </Text>
            </LinkButton>
        </Box>
    );
}

function TagList({ children }) {
    return (
        <Box>
            {children.map((item, idx) => (
                <LinkButton key={idx}>#{item}</LinkButton>
            ))}
        </Box>
    );
}

function Tags() {
    return (
        <Box mt="6">
            <Flex pl="2" py="4">
                <Heading as="h3" fontSize="1rem">
                    My Tags
                </Heading>
                <Spacer />
                <Image src="/assets/settings.svg" />
            </Flex>
            <Box maxH="42vh" overflowY="auto">
                <TagList>
                    {[
                        'react',
                        'javascript',
                        'css',
                        'beginners',
                        'html',
                        'career',
                        'python',
                        'tutorial',
                        'productivity',
                        'aws',
                        'cpp',
                        'docker',
                        'bash',
                        'rust',
                        'computerscience',
                        'npm',
                        'node',
                        'php',
                        'git',
                        'vscode',
                        'dart',
                        'webassembly',
                        'andriod',
                        'discuss',
                        'typescript',
                    ]}
                </TagList>
            </Box>
        </Box>
    );
}

export default function Sidebar() {
    return (
        <Box as="aside">
            <Links />
            <Tags />
        </Box>
    );
}
