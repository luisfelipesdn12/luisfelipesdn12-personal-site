import React from 'react';
import styled from 'styled-components';
import { useContent } from '../../../content';
import SeeMoreEducations from './SeeMoreEducation';
import EducationItem from './EducationItem';

const Wrapper = styled.section`
    @media (min-width: 640px) {
        display: grid;
        grid-template-columns: repeat(8, minmax(0, 1fr));
    }

    @media (min-width: 1280px) {
        grid-template-columns: repeat(6, minmax(0, 1fr));
    }
`;

export const EducationsList = styled.ul`
    justify-content: center;
    margin-top: 2rem;

    @media (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
    }
`;

interface EducationsProps {
    /**
     * The number of educations that
     * must be showed in the home.
     * */
    previewCont?: number;
}

const Education: React.FC<EducationsProps> = ({ previewCont = 6 }) => {
    const content = useContent();

    return (
        <Wrapper>
            <div>
                <h1>{content.education.title}</h1>
                <p style={{ fontSize: '1.5rem' }}>
                    {content.education.description}
                </p>
                <EducationsList>
                    {content.education.list.slice(0, previewCont).map(education => (
                        <EducationItem education={education} />
                    ))}
                    {content.education.list.slice(previewCont).length && (
                        <SeeMoreEducations
                            nextEducations={content.education.list.slice(previewCont)}
                        />
                    )}
                </EducationsList>
            </div>
        </Wrapper>
    );
};

export default Education;
