import Head from 'next/head';
import Navbar from 'components/navbar';

export default function Home() {
    return (
        <>
            <Head>
                <title>DEV Community 👨‍💻👨‍💻</title>
                <link rel="icon" href="/favicon.png" />
            </Head>


            <Navbar/>
        </>
    );
}
