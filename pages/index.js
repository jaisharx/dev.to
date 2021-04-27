import Head from 'next/head';

import { Box, Grid } from '@chakra-ui/layout';
import Navbar from 'components/navbar';
import Sidebar from 'components/sidebar';
import Container from 'components/container';
import Posts from 'components/posts';

export default function Home() {
    return (
        <>
            <Head>
                <title>DEV Community 👨‍💻👨‍💻</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Navbar />

            <Box as="main" bg="#EEF0F1">
                <Container>
                    <Grid templateColumns="1fr 3fr 1fr" gap={4} pt="4">
                        <Sidebar />
                        <Posts />
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
