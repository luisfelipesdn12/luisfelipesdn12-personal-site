import React from 'react';
import Footer from '../src/components/parts/Footer';
import Hero from '../src/components/parts/Hero';
import Skills from '../src/components/parts/Skills';
import Projects from '../src/components/parts/Projects';
import DivisorLine from '../src/components/base/DivisorLine';
import Education from '../src/components/parts/Education';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Skills />
            <DivisorLine />
            <Projects />
            <DivisorLine />
            <Education />
            <Footer />
        </>
    );
};

export default Home;
