import { Box, Button, Flex, Heading, Image, Spacer } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LinkButton = styled(Button)`
    background: transparent;
    width: 14rem;
    padding: 8px;
    font-weight: normal;
    justify-content: flex-start;

    &:hover {
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
        </Box>
    );
}

function Tags() {
    return (
        <Box mt="6">
            <Flex pl="4" py="4">
                <Heading as="h3" fontSize="1rem">My Tags</Heading>
                <Spacer/>
                <Image src="/assets/settings.svg"/>
            </Flex>
            <Box maxH="42vh" overflowY="auto">
                <LinkButton>#react</LinkButton>
                <LinkButton>#javascript</LinkButton>
                <LinkButton>#css</LinkButton>
                <LinkButton>#beginners</LinkButton>
                <LinkButton>#html</LinkButton>
                <LinkButton>#career</LinkButton>
                <LinkButton>#python</LinkButton>
                <LinkButton>#tutorial</LinkButton>
                <LinkButton>#productivity</LinkButton>
                <LinkButton>#aws</LinkButton>
                <LinkButton>#cpp</LinkButton>
                <LinkButton>#docker</LinkButton>
                <LinkButton>#bash</LinkButton>
                <LinkButton>#rust</LinkButton>
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
