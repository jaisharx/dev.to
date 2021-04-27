import { Box, Heading, Spacer, Button, HStack } from '@chakra-ui/react';
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
                transition: width .2s ease;
                position: absolute;
                bottom: 0;
                margin: auto;
                content: '';
                height: 3px;
                width: 70%;
                border-radius: 4px;
                background-color: #3B49DF;
            }
        `}
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

export default function Posts() {
    return (
        <Box minH="400vh" borderRadius="md">
            <Header />
        </Box>
    );
}
