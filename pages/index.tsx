import { useRouter } from 'next/router';
import React from 'react';
import Footer from '../src/components/parts/Footer';
import Hero from '../src/components/parts/Hero';
import { getLocatedContent } from '../src/content';

const Home: React.FC = () => {
    const content = getLocatedContent(useRouter());

    return (
        <>
            <Hero />
            <Footer />
        </>
    );
};

export default Home;
