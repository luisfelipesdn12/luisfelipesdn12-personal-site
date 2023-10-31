import React, { ReactNode } from 'react';
import styled from 'styled-components';
import NavBar from '../parts/Hero/NavBar';

export const HeroWrapper = styled.header`
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

const PageTitle = styled.h1`
    margin-bottom: 1.25rem;
`;

const Description = styled.p`
    font-size: 1.5rem;

    strong {
        color: ${props => props.theme.colors.text.link};
        font-weight: 600;
    }
`;

const ProfileImage = styled.img`
    width: 7rem;
    height: 7rem;
    border-radius: 100%;
    border: ${props => props.theme.colors.text.title} 0.2rem solid;
    background-color: ${props => props.theme.colors.text.title};
`;

interface HeroHeaderProps {
    pageTitle?: string | ReactNode;
    description?: string | ReactNode;
    profileImageUrl?: string;
    children?: ReactNode;
}

const HeroHeader: React.FC<HeroHeaderProps> = ({
    pageTitle,
    description,
    profileImageUrl,
    children,
}) => {
    return (
        <HeroWrapper>
            <div>
                <NavBar />
                {profileImageUrl ? <ProfileImage src={profileImageUrl}></ProfileImage> : null}
                {pageTitle ? <PageTitle>{pageTitle}</PageTitle> : null}
                {description ? <Description>{description}</Description> : null}
                {children}
            </div>
        </HeroWrapper>
    );
};

export default HeroHeader;
