import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { getLocatedContent } from '../../../content';

const Wrapper = styled.p`
    font-size: 1.5rem;

    span {
        color: ${props => props.theme.colors.text.link};
        font-weight: 600;
    }
`;

/**
 * The "biography-like" description of me.
 */
const Description: React.FC = () => {
    const content = getLocatedContent(useRouter());

    return (
        <Wrapper>
            {content.hero.description.prefix}
            {content.hero.description.languages.map(
                (language, index, array) => {
                    let separator: string;

                    switch (index) {
                        // If is the last language,
                        // do not include any separator.
                        case array.length - 1:
                            separator = '';
                            break;
                        case array.length - 2:
                            separator = ` ${content.hero.description.and} `;
                            break;
                        default:
                            separator = ', ';
                            break;
                    }

                    return (
                        <>
                            <span key={index}>{language}</span>
                            {separator}
                        </>
                    );
                },
            )}
            {content.hero.description.suffix}
        </Wrapper>
    );
};

export default Description;
