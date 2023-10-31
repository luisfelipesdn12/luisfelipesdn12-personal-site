import React from 'react';
import styled from 'styled-components';
import { BaseCard } from '../../../models';

const Wrapper = styled.li`
    cursor: pointer;
    overflow: hidden;
    margin: 2rem 1rem;
    margin-bottom: 0.75rem;
    border-radius: 0.25rem;
    max-width: 23.5rem;
    box-shadow: 0 1px 3px 0 ${props => props.theme.colors.text.title}10, 0 1px 2px 0 ${props => props.theme.colors.text.title}10;
`;

const Image = styled.img`
    width: 100%;
`;

const Description = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    h1 {
        margin-bottom: 0.5rem;
        font-size: 1.25rem;
        line-height: 1.75rem;
        font-weight: 700;
        color: ${props => props.theme.colors.text.title};
    }

    p {
        font-size: 1rem;
        line-height: 1.5rem;
        color: ${props => props.theme.colors.text.simple};
    }
`;

interface EducationItemProps {
    education: BaseCard;
}

const EducationItem: React.FC<EducationItemProps> = ({ education }) => (
    <Wrapper onClick={() => open(education.link, "_blank")}>
        <Image
            src={education.imageUrl}
            alt={education.name}
        />
        <Description>
            <h1>{education.name}</h1>
            <p>{education.description}</p>
        </Description>
    </Wrapper>
);

export default EducationItem;
