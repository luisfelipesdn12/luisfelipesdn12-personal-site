import React from 'react';
import styled from 'styled-components';
import HeroHeader from '../src/components/base/HeroHeader';
import { EducationsList } from '../src/components/parts/Education';
import EducationItem from '../src/components/parts/Education/EducationItem';
import { useContent } from '../src/content';

const Wrapper = styled.section`
    @media (min-width: 640px) {
        display: grid;
        grid-template-columns: repeat(8, minmax(0, 1fr));
    }

    @media (min-width: 1280px) {
        grid-template-columns: repeat(6, minmax(0, 1fr));
    }
`;

const Educations: React.FC = () => {
    const content = useContent();

    return (
        <>
            <HeroHeader
                pageTitle={content.education.title}
                description={content.education.description}
            />
            <Wrapper>
                <div>
                    <EducationsList>
                        {content.education.list.map(education => (
                            <EducationItem education={education} />
                        ))}
                    </EducationsList>
                </div>
            </Wrapper>
        </>
    );
};

export default Educations;
