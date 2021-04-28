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
    Skeleton,
} from '@chakra-ui/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import useSWR from 'swr';
import fetcher from 'lib/fetcher';

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

const PostLink = styled(Link)`
    &:hover {
        color: #323ebe;
        text-decoration: none;
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

function Card({
    title,
    username,
    userProfile,
    publishedDate,
    tagList,
    headerImage,
    postLink,
    readingTime,
    reactionCount,
    commentCount,
}) {
    return (
        <Box
            mt="3"
            as="article"
            bg="white"
            borderRadius="md"
            overflow="hidden"
            border="1px solid #08090a1a"
        >
            {headerImage ? <Image src={headerImage} /> : ''}
            <Grid templateColumns="max-content 1fr" gap={2} p={4}>
                <Image src={userProfile} w="8" borderRadius="full" />

                <Box>
                    <VStack align="flex-start" spacing={0}>
                        <Text color="#4d5760" fontSize="14px" fontWeight="500">
                            {username}
                        </Text>
                        <Text color="#4d5760" fontSize="12px">
                            {publishedDate}
                        </Text>
                    </VStack>
                    <Heading fontSize={headerImage ? '30px' : '24px'} mt="3">
                        <PostLink href={postLink} isExternal>
                            {title}
                        </PostLink>
                    </Heading>
                    <HStack mt="3" fontSize="14px" color="#64707d">
                        {tagList.map((tag, idx) => (
                            <Text as={Link} key={idx}>
                                #{tag}
                            </Text>
                        ))}
                    </HStack>
                    <HStack mt={3}>
                        <CardBtn
                            leftIcon={<Image src="/assets/like.svg" />}
                            ml={-2}
                        >
                            {reactionCount} reactions
                        </CardBtn>
                        <CardBtn leftIcon={<Image src="/assets/comment.svg" />}>
                            {commentCount} comments
                        </CardBtn>
                        <Spacer />
                        <Text fontSize="12px">{readingTime} min read</Text>
                        <SaveBtn>Save</SaveBtn>
                    </HStack>
                </Box>
            </Grid>
        </Box>
    );
}

export default function Posts() {
    const { data, error } = useSWR(
        'https://dev.to/stories/feed/?page=1',
        fetcher
    );

    if (error) return <div>failed to load</div>;
    if (!data)
        return (
            <Box>
                <Header />
                <Skeleton height="320px" mt="3" />
                <Skeleton height="20px" mt="3" />
                <Skeleton height="20px" mt="3" />
                <Skeleton height="20px" mt="3" />
                <Skeleton height="180px" mt="3" />
                <Skeleton height="20px" mt="3" />
                <Skeleton height="20px" mt="3" />
                <Skeleton height="20px" mt="3" />
            </Box>
        );

    return (
        <Box mb="8" borderRadius="md">
            <Header />
            {data.map((post, idx) => (
                <Card
                    key={post.id}
                    title={post.title}
                    username={post.user.name}
                    tagList={post.tag_list}
                    readingTime={post.reading_time}
                    commentCount={post.comments_count}
                    reactionCount={post.public_reactions_count}
                    postLink={`https://dev.to${post.path}`}
                    publishedDate={post.readable_publish_date}
                    userProfile={post.user.profile_image_url}
                    headerImage={idx === 0 ? post.main_image : ''}
                />
            ))}
        </Box>
    );
}
