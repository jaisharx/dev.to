import Head from 'next/head';

import { Box, Grid } from '@chakra-ui/layout';
import Navbar from 'components/navbar';
import Sidebar from 'components/sidebar';
import Container from 'components/container';
import Posts from 'components/posts';
import Listing from 'components/listings';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        function zoomPage() {
            document.querySelector('#page').style.zoom = .4;
        }

        function checkMessage(evt) {
            if (evt.origin === 'https://jaisharma.dev/') {
                if (evt.data === 'isZoomed') {
                    zoomPage();
                }
            }
        }

        window.addEventListener('message', checkMessage, false);
    }, []);

    return (
        <>
            <Head>
                <title>DEV Community 👨‍💻👨‍💻</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Navbar />

            <Box as="main" bg="#EEF0F1" id="page">
                <Container>
                    <Grid templateColumns="1fr 3fr 1.5fr" gap={4} pt="4">
                        <Sidebar />
                        <Posts />
                        <Listing />
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
