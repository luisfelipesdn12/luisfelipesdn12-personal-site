import { useRouter } from 'next/router';
import React from 'react';
import Footer from '../src/components/parts/Footer';
import { getLocatedContent } from '../src/content';

const Home: React.FC = () => {
    const content = getLocatedContent(useRouter());

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>{content.hero.greeting}</h1>
            <Footer />
        </>
    );
};

export default Home;
