import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { getLocatedContent } from '../../../content';
import Description from './Description';
import LinksAndResourses from './LinksAndResourses';
import NavBar from './NavBar';

const Wrapper = styled.header`
    margin: 0;
    padding: 0.75rem;
    padding-bottom: 5rem;
    background-color: ${props =>
        props.theme.colors.background.accent + (125).toString(16)};

    @media (min-width: 640px) {
        display: grid;
        grid-template-columns: repeat(8, minmax(0, 1fr));
    }

    @media (min-width: 1280px) {
        grid-template-columns: repeat(6, minmax(0, 1fr));
    }
`;

const Greeting = styled.h1`
    font-weight: 700;
    margin-top: 4rem;
    font-size: 2.25rem;
    margin-bottom: 1.25rem;
`;

const Hero: React.FC = () => {
    const content = getLocatedContent(useRouter());

    return (
        <Wrapper>
            <div>
                <NavBar />
                <Greeting>{content.hero.greeting}</Greeting>
                <Description />
                <LinksAndResourses />
            </div>
        </Wrapper>
    );
};

export default Hero;
